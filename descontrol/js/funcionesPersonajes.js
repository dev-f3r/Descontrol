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
/**
 * Modifica la vida del personaje actual sumando o restando 1 punto
 * @param {string} accion - "mas" para sumar vida, "menos" para restar vida
 */
function masMenosVida(accion) {
    if (accion == "mas") {
        if (personaje.vida < 18) personaje.vida += 1
    } else {
        if (personaje.vida >= 1) personaje.vida -= 1
    }
    mostrarPersonaje()
    consolaPersonajeTxt(`Vida: ${personaje.vida}`)
}


/**
 * Muestra la descripcion de un atributo del personaje
 * @param {string} nombre - nombre del atributo
 */
function descripcionAtributo(nombre) {
    consolaPersonajeTxt(`${capitalizarPrimeraLetra(nombre)}: ${personaje[nombre]}`)
}

// * Identificadores de cada personaje del menu correspondiente
const idBtnPersonaje = Object.keys(personajesDict)
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
        // Muestra la descripcion del personaje
        consolaPersonajeTxt(personaje.descripcion)
    })
})

// * Atributos
// Itera sobre los identificadores de los botones de atributos
const idBtnAtributo = ["ataque", "esquiva", "velocidad", "vida", "accion"]
// Agrega un manejador de eventos a cada botón de atributo
idBtnAtributo.forEach(id => {
    // Captura el click del botón de atributo
    document.getElementById(`${id}Btn`).addEventListener('click', () => {
        // Si hay un personaje seleccionado
        if (personaje) {
            // Si el atributo no es vida, muestra su descripción  
            if (id !== "vida") descripcionAtributo(id)
            // Si el atributo es vida, muestra los botones más/menos
            else mostrarBtnMasMenos()
        }
        // Si no hay personaje seleccionado, muestra mensaje
        else consolaPersonajeTxt("No hay personaje actual")
    })
})