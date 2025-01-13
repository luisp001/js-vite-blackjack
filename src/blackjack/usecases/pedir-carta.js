/**
 * Devuelve una carta del deck. Esta carta está representada como un string.
 * Ejemplos: "2D", "3H", etc.
 *
 * @param {string[]} deck El array de strings que representa al deck actual.
 * @returns {string}
 */

export const pedirCarta = (deck) => {
  if (!deck)
    throw new Error("deck es obligatorio y debe ser un array de strings.");

  if (deck.length === 0) {
    throw new Error("No hay cartas en el deck.");
  }

  const carta = deck.pop();

  return carta;
};
