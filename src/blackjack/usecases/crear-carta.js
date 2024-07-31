/**
 * Función que crea una carta
 * @param {String} carta
 * @returns {HTMLImageElement}
 */
export const crearCarta = (carta) => {
  const imgCarta = document.createElement('img')
  imgCarta.src = 'assets/cartas/' + carta + '.png'
  imgCarta.classList.add('carta')
  return imgCarta
}
