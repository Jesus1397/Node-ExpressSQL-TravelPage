const Viaje = require("../models/Viajes");

exports.mostrarViajes = async (req, res) => {
  const viajes = await Viaje.findAll();
  res.render("viajes", {
    titulo: "Viajes",
    año: res.locals.fechaActual,
    ruta: res.locals.ruta,
    viajes: viajes
  });
};

exports.mostrarViaje = async (req, res) => {
  const viaje = await Viaje.findOne({ where: { id: req.params.id } });
  res.render("viaje", {
    titulo: "Viaje",
    año: res.locals.fechaActual,
    viaje: viaje
  });
};
