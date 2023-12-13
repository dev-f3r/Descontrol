// Iteramos por cada personaje
for (const nombre in personajesDict) {
    const personaje = personajesDict[nombre]
    // Creamos el elemento HTML para el personaje
    // TODO: Arreglar el src de la imagen
    let divNuevo = `<div class="item-modal" id="${nombre}"><img src="${personaje.imagen}" class="modal-img"></div>`

    // Lo insertamos despues del boton de cerrarModalPersonaje
    cerrarModalPersonaje.insertAdjacentHTML('afterend', divNuevo)
}

const modalAvatares = document.getElementById("modalAvatares")

let rows = (Object.keys(personajesDict).length / 3) + 1
let cols = 3

modalAvatares.style.gridRow = `7/span ${rows + 2}`

modalAvatares.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
modalAvatares.style.gridTemplateRows = `repeat(${rows}, 1fr)`