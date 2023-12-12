const cartasDict = {
    normales: {
        "carta normal 1": {
            nombre: "carta normal 1",
            descripcion: "carta normal que daña un poco",
            imagen: "img/new.png",
            ataque: 1,
            esquiva: 1,
            velocidad: 1,
            vida: 0,
            accion: 1,
        }
    },
    especiales: {
        "carta especial 1": {
            nombre: "carta especial 1",
            descripcion: "carta especial que daña y aumenta velocidad",
            imagen: "img/new.png",
            ataque: 2,
            esquiva: 2,
            velocidad: 2,
            vida: 0,
            accion: 2,
        }
    },
    epicas: {
        "carta epica 1": {
            nombre: "carta epica 1",
            descripcion: "carta epica que daña mucho y quita vida",
            imagen: "img/new.png",
            ataque: 3,
            esquiva: 3,
            velocidad: 3,
            vida: 0,
            accion: 3,
        }
    }
}


const listaCartasNormales = Object.keys(cartasDict.normales)
const listaCartasEspeciales = Object.keys(cartasDict.especiales)
const listaCartasEpicas = Object.keys(cartasDict.epicas)