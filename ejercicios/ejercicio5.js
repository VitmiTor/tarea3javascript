"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularMediaGeometrica = (arrayNumbers, cantidadN) => {
  let producto = 1;
  for (let i = 0; i < cantidadN; i++) {
    const numeroAleatorio = generarEnteroAleatorio(100, 999);
    arrayNumbers.push(numeroAleatorio);
    producto = producto * arrayNumbers[i];
  }
  return Math.pow(producto, 1 / cantidadN);
};

const imprimirMensaje = (mediageometrica) => {
  console.log(`la media geometrica es ${mediageometrica}`);
};

const numbers = [];
const cantidadN = generarEnteroAleatorio(1, 10);
const mediaGeometrica = calcularMediaGeometrica(numbers, cantidadN);
imprimirMensaje(mediaGeometrica);
