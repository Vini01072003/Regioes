'use strict'


const mapa = document.querySelector('svg')

const getEstado = (event) => {

    const estado = target.id.replace('BR-', '')
    console.log(estado)
}

mapa.addEventListener('click', getEstado)