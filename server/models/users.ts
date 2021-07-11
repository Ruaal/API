import { Sequelize, Model, DataTypes } from 'sequelize';
const connection = require("../database");

class User extends Model
{
public id!: number;
public username!: string;
public password!: string;
}
User.init({

    username: {
        type:DataTypes.STRING(128),
        allowNull: false
    },
    password: {
        type:DataTypes.STRING(128),
        allowNull: false
    }
}, 
{
    sequelize: connection,
    freezeTableName: true,
    timestamps: false, //No queremos timestamps ni saber cuando ha sido creado
    createdAt: false,
    updatedAt: false
    
});
User.sync();
exports.User = User;