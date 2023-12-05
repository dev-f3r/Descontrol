// Iteramos por cada personaje
for (const pj in personajesDict) {
    // Creamos el elemento HTML para el personaje
    // TODO: Arreglar el src de la imagen
    let nuevoPj = `<div class="item-modal" id="${pj}"><img src="img/vida.png" class="modal-img"></div>`

    // Lo insertamos despues del boton de cerrarModal
    cerrarModal.insertAdjacentHTML('afterend', nuevoPj)
}
