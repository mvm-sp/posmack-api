module.exports = {
    HOST: "localhost",
    USER: "<some-data>",
    PASSWORD: "<some-data>",
    DB: "posmack",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };