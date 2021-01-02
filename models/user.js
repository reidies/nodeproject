const { Sequelize, Model, DataTypes } = require('sequelize');
const sequalize = require('../util/database');

const User = sequalize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true
    },
    name : DataTypes.STRING,
    email : DataTypes.STRING
});

module.exports = User;