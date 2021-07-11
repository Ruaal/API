import { Sequelize, Model, DataTypes } from 'sequelize';
const connection = require("../database");

class Personas extends Model
{
public id!: number;
public nombre!: string;
public apellidos!: string;
public direccion!: string;
public fecha_nacimiento!: Date; 
}
Personas.init({

    nombre: {
        type:DataTypes.STRING(128),
        allowNull: false
    },
    apellidos: {
        type:DataTypes.STRING(128),
        allowNull: false
    },
    direccion: {
        type:DataTypes.STRING(128),
        allowNull: false
    },
    fecha_nacimiento: {
        type:DataTypes.DATEONLY,
        allowNull: false
    },
}, 
{
    sequelize: connection,
    freezeTableName: true, //No queremos timestamps ni saber cuando ha sido creado
    timestamps: false,
    createdAt: false,
    updatedAt: false
    
});

Personas.sync();
exports.Personas = Personas;