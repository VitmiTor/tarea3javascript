"use strict";

/**
 *
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
const generarEnteroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 *
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
const generarDecimalAleatorio = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

module.exports = { generarEnteroAleatorio, generarDecimalAleatorio };
