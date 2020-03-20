//REQUIRES
const express = require("express");
const path = require("path");
const db = require("./config/database");

//INITIALIZATIONS
const app = express();
db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch(error => console.log("error"));

//SETTINGS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//STATIC
app.use(express.static("src/public"));

//MIDDLEWARE
app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path;
  return next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.use(require("./routes"));

//SERVER
app.listen(3000, () => {
  console.log("Server started - http://localhost:3000");
});
