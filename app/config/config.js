module.exports = {
    HOST: "localhost",
    USER: "<some>",
    PASSWORD: "<some>",
    DB: "posmack",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };