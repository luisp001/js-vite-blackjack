import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 *
 * @param {*} puntosMinimos Puntos mínimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML Elemento HTML donde mostrar los puntos.
 * @param {HTMLElement} divCartasComputadora El elemento <div> donde mostrar las cartas.
 * @param {*} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("puntosMinimos es obligatorio.");

  if (!puntosHTML) throw new Error("puntosHTML es obligatorio.");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(.");
    } else if (puntosMinimos > 21) {
      alert("La computadora gana.");
    } else if (puntosComputadora > 21) {
      alert("El jugador 1 gana.");
    } else {
      alert("La computadora gana.");
    }
  }, 100);
};
