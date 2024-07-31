import { crearCarta, crearDeck, pedirCarta, valorCarta } from './usecases'

/*
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = []
const tipos = ['C', 'D', 'H', 'S'],
  especiales = ['A', 'J', 'Q', 'K']

let puntosJugadores = []

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
  btnNuevo = document.querySelector('#btnNuevo'),
  btnDetener = document.querySelector('#btnDetener')

const divCartasJugadores = document.querySelectorAll('.divCartas')

const puntosHTML = document.querySelectorAll('small')

// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales)
  puntosJugadores = []
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0)
  }
  puntosHTML.forEach((elem) => (elem.innerText = '0'))
  divCartasJugadores.forEach((elem) => (elem.innerHTML = ''))

  btnDetener.disabled = false
  btnPedir.disabled = false
}

// Turno: 0 = primer jugador y el último será la computadora
const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
  puntosHTML[turno].innerText = puntosJugadores[turno]
  return puntosJugadores[turno]
}

const determinarGanador = () => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores

  setTimeout(() => {
    let mensajeJuego = ''
    if (puntosMinimos > 21) {
      mensajeJuego = 'El Jugador Perdió'
    } else if (puntosComputadora === puntosMinimos) {
      mensajeJuego = 'Nadie Ganó'
    } else if (puntosComputadora > 21) {
      mensajeJuego = 'El Jugador Ganó'
    } else if (puntosComputadora > puntosMinimos) {
      mensajeJuego = 'Computadora Gana'
    }
    alert(mensajeJuego)
  }, 100)
}

// turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  let puntosComputadora = 0
  do {
    const carta = pedirCarta(deck)
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)
    const cartaHtml = crearCarta(carta, puntosJugadores.length - 1)
    divCartasJugadores[puntosJugadores.length - 1].append(cartaHtml)
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21)
  determinarGanador()
}

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck)
  const puntosJugador = acumularPuntos(carta, 0)
  const cartaHtml = crearCarta(carta)
  divCartasJugadores[0].append(cartaHtml)

  if (puntosJugador > 21) {
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora(puntosJugador)
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora(puntosJugador)
  }
})

btnDetener.addEventListener('click', () => {
  btnDetener.disabled = true
  btnPedir.disabled = true

  turnoComputadora(puntosJugadores[0])
})

btnNuevo.addEventListener('click', () => {
  inicializarJuego()
})
