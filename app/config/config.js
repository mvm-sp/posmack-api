const dotenv = require('dotenv');
const path = require('path');
const currentPath = path.resolve(__dirname, `${process.env.NODE_ENV}.env`)

console.log("the env file path is: ", currentPath)

dotenv.config({
  path: currentPath
});


module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PWD,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };