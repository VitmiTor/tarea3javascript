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

const esPrimo = (number) => {
  if (number === 0 || number === 1 || number === 4) {
    return false;
  } else {
    for (let i = 2; i < number / 2; i++) {
      if (number % i == 0) {
        return false;
      }
      return true;
    }
  }
};

const esCapicua = (number) => {
  let inversa = 0;
  let residuo = 0;
  let aux = number;

  while (aux != 0) {
    residuo = aux % 10;
    inversa = inversa * 10 + residuo;
    aux = Math.trunc(aux / 10);
  }
  if (number === inversa) {
    return true;
  } else {
    return false;
  }
};
module.exports = { arrayAleatorio, esPrimo, esCapicua };
