"use strict";

module.exports = function(sequelize, DataTypes) {
	const Usuario = sequelize.define('Usuario', {
		tableName: 'USUARIO',

		timestamps: true,						// incluir timestamps de sequelize
		freezeTableName: true,					// no modificar nombre de tabla
		createdAt: 'USR_FECHA_CREACION',
		updatedAt: 'USR_FECHA_MODIFICACION',

		USR_ID: { type: DataTypes.STRING, primaryKey: true },
		ROL_ID: DataTypes.BIGINT,
		USR_NOMBRE: DataTypes.STRING,
		USR_EMAIL: DataTypes.STRING,
		USR_LAST_ACCESS: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
		USR_CARGO: DataTypes.STRING,
			//USR_INACTIVIDAD_DIAS: DataTypes.INTEGER,
		USR_RESPONSABLE: DataTypes.BOOLEAN
		},
		{
			indexes: [
		    {
		      unique: true,
		      fields: ['USR_ID']
		    }
		]}
	);

	Usuario.associate = function(models) {
		Usuario.belongsTo(models.Rol, {foreignKey: 'ROL_ID', targetKey: 'ROL_ID'});
	}

	return Usuario;
};