// ? Guarda el indice del personaje actual
let indicePersonaje = null

/**
 * ? Muestra los datos del personaje actual incluyendo imagen, atributos
 * y descripción.
 * 
 */
function mostrarPersonaje() {
    // Recorre las claves de atributo definidas y actualiza los elementos de la UI
    const atributos = ["ataque", "esquiva", "velocidad", "vida", "accion"];
    atributos.forEach(key => {
        document.getElementById(`${key}Indicador`).textContent = personaje[key];
    });
    // Muestra la descripción del personaje en la consola
    consolaPersonajeTxt(personaje.descripcion);
    // Establece la imagen del personaje basado en la propiedad personaje.imagen
    imgPersonaje.src = personaje.imagen;
}

/**
 * ? Cambia el personaje actual por otro
 * @param {string} nombre - nombre del nuevo personaje
 */
function cambiarPersonaje(nombre) {
    // Verifica si personaje está definido
    if (!personaje) personaje = {}
    // Asigna las propiedades del nuevo personaje 
    Object.assign(personaje, personajesDict[nombre])
}

// TODO: Funciones para editar la vida del personaje

// * Identificadores de cada personaje del menu correspondiente
const idBtnPersonaje = ["test1", "test2", "test3", "test4"]
// Recorre cada identificador y les agrega un evento
idBtnPersonaje.forEach(id => {
    // ? Captura el click de un personaje a elegir
    document.getElementById(id).addEventListener('click', () => {
        // Cambia el personaje actual
        cambiarPersonaje(id)
        // Lo muestra
        mostrarPersonaje()
        // Cierra el modal
        cerrarModal.click()
        // Limpia la consola
        textoConsolaPersonaje.click()
    })
})