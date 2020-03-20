const Testimonial = require("../models/Testimoniales");

exports.mostrarTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll();
  res.render("testimoniales", {
    titulo: "Testimoniales",
    año: res.locals.fechaActual,
    testimoniales,
    errores: 0,
    nombre: "",
    correo: "",
    mensaje: ""
  });
};

exports.agregarTestimonial = (req, res) => {
  let { nombre, correo, mensaje } = req.body;

  let errores = [];
  if (!nombre) {
    errores.push({ mensaje: "Agrega tu nombre" });
  }
  if (!correo) {
    errores.push({ mensaje: "Agrega tu correo" });
  }
  if (!mensaje) {
    errores.push({ mensaje: "Agrega tu mensaje" });
  }

  if (errores.length > 0) {
    res.render("testimoniales", {
      titulo: "Testimoniales",
      año: res.locals.fechaActual,
      errores,
      nombre,
      correo,
      mensaje
    });
  } else {
    Testimonial.create({
      nombre,
      correo,
      mensaje
    })
      .then(testimonial => {
        res.redirect("/testimoniales");
      })
      .catch(error => {
        console.log(error);
      });
  }
};
