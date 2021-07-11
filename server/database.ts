import sequelize from 'sequelize';
const {
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_DATABASE,
  } = process.env;
const connection = new sequelize.Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD,{
    host: MYSQL_HOST,
    dialect: 'mysql',
});
try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = connection;