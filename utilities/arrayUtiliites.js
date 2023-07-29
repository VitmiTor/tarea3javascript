"use strict";
const { generarEnteroAleatorio } = require("../utilities/randomUtilities");

const arrayAleatorio = (n, min, max) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    const numero = generarEnteroAleatorio(min, max);
    array.push(numero);
  }
  return array;
};

module.exports = { arrayAleatorio };
