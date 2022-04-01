const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-sql', 'root', 'ayoscript222', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
