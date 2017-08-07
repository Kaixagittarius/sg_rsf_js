"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');
// LOAD ENVIRONMENT CONFIG
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))[env];

// INITIALIZE DATABASE CONNECTION
const sequelize = new Sequelize(config.database, config.username, config.password, config);

var db = {};

// LOAD MODELS
fs
	.readdirSync(path.join(__dirname))
	.filter(function(file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function(file) {
		var model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

// ASSOCIATE FOREIGN KEYS
Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

// instantiation
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;