const Sequealize = require("sequelize");
const db = require("../config/database");
const Viaje = db.define("viaje", {
  titulo: {
    type: Sequealize.STRING
  },
  precio: {
    type: Sequealize.STRING
  },
  fecha_ida: {
    type: Sequealize.DATE
  },
  fecha_vuelta: {
    type: Sequealize.DATE
  },
  imagen: {
    type: Sequealize.STRING
  },
  descripcion: {
    type: Sequealize.STRING
  },
  disponibles: {
    type: Sequealize.STRING
  }
});

module.exports = Viaje;
