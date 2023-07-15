var express = require('express');
const routes = express.Router();
const cats = require("./cats.routes");

routes.use("/cats", cats);

routes.get('/test', (req, res) => {
    res.send('Hola, esta es una ruta de prueba');
  });

module.exports = routes;