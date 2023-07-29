"use strict";

const esPrimo = (number) => {
  let i = 2;
  while (i < number) {
    if (i % number != 0) {
      i++;
    } else {
      return false;
    }
  }
  return true;
};

const esCapicua = (number) => {
  let inversa = 0;
  let residuo = 0;
  let aux = number;

  while (aux != 0) {
    residuo = aux % 10;
    inversa *= 10 + residuo;
    aux = Math.trunc(aux / 10);
  }
  return number === inversa;
};

module.exports = { esCapicua, esPrimo };
