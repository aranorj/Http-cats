require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "port": process.env.DB_PORT,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
};
