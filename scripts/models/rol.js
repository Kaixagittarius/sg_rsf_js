"use strict";

module.exports = function(sequelize, DataTypes) {
	const Rol = sequelize.define('Rol', {
		tableName: 'ROL',

		timestamps: true,						// incluir timestamps de sequelize
		freezeTableName: true,					// no modificar nombre de tabla
		createdAt: 'ROL_FECHA_CREACION',
		updatedAt: 'ROL_FECHA_MODIFICACION',

		ROL_ID: { type: DataTypes.BIGINT, primaryKey: true },
		ROL_NOMBRE: DataTypes.STRING,
		ROL_DESCRIPCION: DataTypes.STRING,
		ROL_ADD_DOC: DataTypes.BOOLEAN,
			//ROL_ADD_EA: DataTypes.BOOLEAN,
		ROL_ADD_ROL: DataTypes.BOOLEAN,
		ROL_ADD_ARE: DataTypes.BOOLEAN,
		ROL_ADD_USR: DataTypes.BOOLEAN,
		ROL_VER_DOC: DataTypes.BOOLEAN,
		ROL_SOLU_DOC: DataTypes.BOOLEAN,
		ROL_AUDIT_CARTA_1: DataTypes.BOOLEAN,
		ROL_AUDIT_CARTA_2: DataTypes.BOOLEAN,
		ROL_AUDIT_SOLU_RSF: DataTypes.BOOLEAN,
		ROL_AUDIT_ESTAD_DOC: DataTypes.BOOLEAN,
			//ROL_VER_EA: DataTypes.BOOLEAN,
			//ROL_SOLU_EA: DataTypes.BOOLEAN,
			//ROL_AUDIT_EA: DataTypes.BOOLEAN,
			//ROL_ESTAD_EA: DataTypes.BOOLEAN,
		ROL_DELETE_DOC: DataTypes.BOOLEAN,
			//ROL_DELETE_EA: DataTypes.BOOLEAN,
		ROL_DELETE_ROL: DataTypes.BOOLEAN,
		ROL_DELETE_ARE: DataTypes.BOOLEAN,
		ROL_DELETE_USR: DataTypes.BOOLEAN,
		ROL_MODIF_ROL: DataTypes.BOOLEAN,
		ROL_MODIF_ARE: DataTypes.BOOLEAN,
		ROL_MODIF_USR: DataTypes.BOOLEAN,
		ROL_ADD_CARTA_SUPER: DataTypes.BOOLEAN,
		ROL_VER_PENDIENTES: DataTypes.BOOLEAN,
		ROL_MODIF_MEMBRETE: DataTypes.BOOLEAN,
		ROL_ADD_CARTA_DOC: DataTypes.BOOLEAN
		},
		{
			indexes: [
		    {
		      unique: true,
		      fields: ['ROL_ID']
		    }
		]}
	);

	return Rol;
};