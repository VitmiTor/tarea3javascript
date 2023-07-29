"use strict";

const {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} = require("../utilities/randomUtilities");

const calcularMediaArmonica = (arrayNumber, cantidadN) => {
  let resultado = 0;
  for (let i = 0; i < cantidadN; i++) {
    const numeroAleatorio = generarEnteroAleatorio(1, 40);
    arrayNumber.push(Math.pow(numeroAleatorio, -1));
    resultado += arrayNumber[i];
  }
  return cantidadN / resultado;
};

const imprimirMensaje = (cantidadN, resultado) => {
  console.log(
    `La cantidad de numeros ${cantidadN} tiene como media armonica ${resultado}`
  );
};

const arrayNumber = [];
const cantidadN = generarEnteroAleatorio(1, 10);
const resultado = calcularMediaArmonica(arrayNumber, cantidadN);
imprimirMensaje(cantidadN, resultado);
