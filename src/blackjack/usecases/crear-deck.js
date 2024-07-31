import _ from 'underscore'

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales EJemplo: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta) throw new Error('tiposDeCarta es obligatorio')
  if (!tiposDeCarta.length > 0)
    throw new Error("tiposDeCarta tiene que un arreglo de string's")

  if (!tiposEspeciales) throw new Error('tiposEspeciales es obligatorio')
  if (!tiposEspeciales.length > 0)
    throw new Error("tiposEspeciales tiene que un arreglo de string's")

  let deck = []
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo)
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo)
    }
  }

  return _.shuffle(deck)
}
