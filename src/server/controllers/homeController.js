const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

exports.consultasHomepage = async (req, res) => {
  const viajes = await Viaje.findAll({ limit: 3 });
  const testimoniales = await Testimonial.findAll({ limit: 3 });

  res.render("index", {
    titulo: "Home",
    año: res.locals.fechaActual,
    viajes,
    testimoniales
  });
};
