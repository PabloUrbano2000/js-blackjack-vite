import { pedirCarta } from './pedir-carta'

/**
 *
 * @param {number} puntosMinimos puntos del jugador
 * @param {Array<Number>} puntosJugadores puntaje de todos los jugadores
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores ) => {
  let puntosComputadora = 0
  do {
    const carta = pedirCarta(deck)
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)
    crearCarta(carta, puntosJugadores.length - 1)
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21)
  determinarGanador()
}
