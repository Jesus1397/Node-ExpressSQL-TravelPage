const Sequelize = require("sequelize");

module.exports = new Sequelize("agenciadeviajes", "root", "", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquiere: 30000,
    idle: 10000
  }
});
