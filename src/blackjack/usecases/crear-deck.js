import _ from "underscore";

/**
 * Esta función crea un nuevo deck. Retorna un arreglo de cartas.
 *
 * @param {string[]} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {string[]} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {string[]}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("tiposDeCarta es obligatorio y no puede estar vacío.");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposDeCarta es obligatorio y no puede estar vacío.");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};
