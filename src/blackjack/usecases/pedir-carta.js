/**
 * Función para retornar una carta
 * @param {Array<String>} deck
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck'
  }
  const cartaSeleccionada =
    deck.length % 2 === 1 ? deck[deck.length - 1] : deck[deck.length / 2]
  deck = deck.filter((carta) => carta !== cartaSeleccionada)
  return cartaSeleccionada
}
