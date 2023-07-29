"use strict";

const { generarEnteroAleatorio } = require("../utilities/randomUtilities");
const { arrayAleatorio } = require("../utilities/arrayUtiliites");
const { esPrimo } = require("../utilities/algorithmsUtilities");

const poblarArrays = (listaNumbers, listaPrimos, listaCompuestos) => {
  listaNumbers.forEach((value) => {
    if (esPrimo(value)) {
      listaPrimos.push(value);
    } else {
      listaCompuestos.push(value);
    }
  });
};

const imprimirMensaje = (listaPrimos, listaCompuestos) => {
  console.log(listaPrimos);
  console.log(listaCompuestos);
  console.log(` el array original tiene esta cantidad de numeros primos ${listaPrimos.length}
                el array original tiene esta cantidad de numeros compuestos ${listaCompuestos.length}`);
};

const tam = generarEnteroAleatorio(1, 10);
const arrayNuevo = arrayAleatorio(tam, 10, 100);
const arrayPrimos = [];
const arrayCompuestos = [];

poblarArrays(arrayNuevo, arrayPrimos, arrayCompuestos);
console.log(arrayNuevo);
imprimirMensaje(arrayPrimos, arrayCompuestos);
