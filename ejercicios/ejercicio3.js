"use strict";

const { generarEnteroAleatorio } = require("../utilities/randomUtilities");

const promedioPonderado = (cantidadN, arrayNumbers, arrayPesos) => {
  let sumatoria = 0;
  for (let i = 0; i < cantidadN; i++) {
    const numeroAleatorio = generarEnteroAleatorio(100, 1000);
    const pesosAleatorios = generarEnteroAleatorio(1, 50);
    arrayNumbers.push(numeroAleatorio);
    arrayPesos.push(pesosAleatorios);
    sumatoria += arrayNumbers[i] * arrayPesos[i];
  }
  return sumatoria / cantidadN;
};

const imprimirMensaje = (arrayNumbers, arrayPesos, promedio) => {
  console.log(
    `el array de numeros es ${arrayNumbers} y el array de Pesos ${arrayPesos} y su promedio ponderado es ${promedio}`
  );
};

const arrayNumbers = [];
const arrayPesos = [];
const cantidadN = generarEnteroAleatorio(1, 10);
const resultado = promedioPonderado(cantidadN, arrayNumbers, arrayPesos);
imprimirMensaje(arrayNumbers, arrayPesos, resultado);
