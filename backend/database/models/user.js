const {Model, DataTypes, Sequelize}  = require("sequelize")
const TABLE_NAME = 'users'
const MODEL_NAME = 'User'

const UserSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type:DataTypes.STRING
    },
    email:{
        allowNull: false,
        unique: true,
        type:DataTypes.STRING
    },
    password:{
        allowNull: false,
        type:DataTypes.STRING,
        
    },
    createdAt:{
        allowNull: false,
        type:DataTypes.DATE,
        field:'created_at',
        defaultValue: DataTypes.NOW
    },
    updatedAt:{
        allowNull: false,
        type:DataTypes.DATE,
        field:'updated_at',
        defaultValue: DataTypes.NOW
    }
}

class User extends Model {
    static  associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: MODEL_NAME,
            timestamps:false
        }
    }
}

module.exports = {
    UserSchema,
    User,
    TABLE_NAME
}