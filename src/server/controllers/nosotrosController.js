exports.infoNosotros = (req, res) => {
  res.render("nosotros", {
    titulo: "Nosotros",
    año: res.locals.fechaActual
  });
};
