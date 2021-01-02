const Sequalize = require('sequelize');

const sequelize = new Sequalize('nodecomplete','root', 'rootroot', {dialect: 'mysql', host:'localhost'});

module.exports = sequelize;