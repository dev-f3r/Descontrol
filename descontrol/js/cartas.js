const cartasDict = {
    normales: {
        "carta normal 1": {
            nombre: "carta normal 1",
            descripcion: "carta normal que daña un poco",
            imagen: "img/new.png",
            daño: 2,
            esquiva: 2,
            velocidad: 2,
            vida: -1,
            accion: 2,
        }
    },
    especiales: {
        "carta especial 1": {
            nombre: "carta especial 1",
            descripcion: "carta especial que daña y aumenta velocidad",
            imagen: "img/new.png",
            daño: 2,
            esquiva: 2,
            velocidad: 2,
            vida: -1,
            accion: 2,
        }
    },
    epicas: {
        "carta epica 1": {
            nombre: "carta epica 1",
            descripcion: "carta epica que daña mucho y quita vida",
            imagen: "img/new.png",
            daño: 2,
            esquiva: 2,
            velocidad: 2,
            vida: -1,
            accion: 2,
        }
    }
}


const listaCartasNormales = Object.keys(cartasDict.normales)
const listaCartasEspeciales = Object.keys(cartasDict.especiales)
const listaCartasEpicas = Object.keys(cartasDict.epicas)