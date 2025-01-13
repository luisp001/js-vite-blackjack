/**
 * Retorna el valor numérico de una carta.
 * Ejemplos: "2D" = 2, "AD" = 11, etc.
 *
 * @param {string} carta
 * @returns {number}
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
