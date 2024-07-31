/**
 * Función que descrifra el valor de una carta
 * @param {string} carta Ejemplo: 'AH'
 * @returns {Number} retorna un el valor numérico de la carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1)
  if (isNaN(valor)) {
    return valor === 'A' ? 11 : 10
  }
  return Number(valor)
}
