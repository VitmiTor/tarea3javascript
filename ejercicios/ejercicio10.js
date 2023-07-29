"use strict";

const { generarEnteroAleatorio } = require("../utilities/randomUtilities");
const { arrayAleatorio } = require("../utilities/arrayUtiliites");

const mayorNumero = (arrayNumbers, mayor, menor) => {
  arrayNumbers.forEach((element) => {
    if (element >= 50) {
      mayor.push(element);
    } else {
      menor.push(element);
    }
  });
};

const imprimirMensaje = (arrayMayor, arrayMenor) => {
  console.log(arrayMayor);
  console.log(arrayMenor);
  console.log(
    `el array original tiene ${arrayMayor.length} numeros mayores o iguales a 50`
  );
  console.log(
    `el array original tiene ${arrayMenor.length} numeros menores a 50`
  );
};

const tam = generarEnteroAleatorio(1, 10);
const arrayNuevo = arrayAleatorio(tam, 1, 100);
const arrayMayor = [];
const arrayMenor = [];
mayorNumero(arrayNuevo, arrayMayor, arrayMenor);
imprimirMensaje(arrayMayor, arrayMenor);
