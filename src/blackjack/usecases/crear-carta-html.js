/**
 * Retorna un HTMLImageElement con la imagen de la carta recibida.
 *
 * @param {string} carta
 * @returns {HTMLImageElement}
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("carta es obligatoria.");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");

  return imgCarta;
};
