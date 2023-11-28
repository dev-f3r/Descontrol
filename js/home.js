var juego = "meeple"


derechaBtn.addEventListener('click', function () {


    juegoTxt.innerHTML = "<img src=img/logo1.png class=logo>" + "SISTEMA DE COMBATE CALLEJERO POR TURNOS"
    juego = "descontrol"

})


izquierdaBtn.addEventListener('click', function () {


    juegoTxt.innerHTML = "<img src=img/logo2.png class=logo>" + "<br> + SISTEMA PARA MICRO-AVENTURAS ROLERAS"
    juego = "meeple"

})

jugarBtn.addEventListener('click', function () {

    if (juego == "meeple") {

        window.location = "../meeple/index.html"

    } else {

        window.location = "../descontrol/index.html"
    }

})








proyecto.addEventListener('click', function () {



    window.location = "proyecto.html"



})