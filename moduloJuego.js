import { tresEnRaya } from './modeloJuego.js';
var juego = new tresEnRaya();
//Dibujamos la tabla en el HTML mediante la ID
function crearTabla() {
    var div = document.getElementById("juego");
    var tabla = document.createElement("TABLE");
    tabla.setAttribute("border", "2");
    tabla.style.height = "400px";
    tabla.style.width = "400px";
    var cont = 0;
    for (let i = 1; i <= 3; i++) {
        var fila = document.createElement("tr");
        for (let j = 1; j <= 3; j++) {
            var columna = document.createElement("td");
            columna.addEventListener("click", pintarCelda, false);
            columna.setAttribute("id", "" + cont);
            fila.appendChild(columna);
            cont++;
        }
        tabla.appendChild(fila);
    }
    div.appendChild(tabla);
}
crearTabla();
var finalizar = true;
//Seleccionamos la celda mediante un evento
function pintarCelda(event) {
    var celda = parseInt(event.target.id);
    if (finalizar) {
        if (juego.mapa[celda] == 0) {
            if (juego.jugador == 1) {
                event.target.style.backgroundImage = "url('http://www.get-emoji.com/images/emoji/2b55.png')";
            }
            if (juego.jugador == 2) {
                event.target.style.backgroundImage = "url('https://image.flaticon.com/icons/png/128/22/22108.png')";
            }
            juego.seleccionCelda(celda);
        } else {
            console.log("No puedes pulsar una casilla ocupada.");
        }
        switch (juego.comprobarGanador()) {
            case 0: break;
            case 1: alert("¡Ganó el jugador 1!"); finalizar = false; break;
            case 2: alert("¡Ganó el jugador 2!"); finalizar = false; break;
            case 3: alert("¡Empate!"); finalizar = false; break;
        }
        if (finalizar == false) {
            let boton = document.getElementById("empezar");
            boton.addEventListener("click", iniciar, false);
        }
    }
    //Empezar la partida mediante un boton con evento.
    function iniciar(event) {
        finalizar = true;
        juego = new tresEnRaya;
        for (let i = 0; i < 9; i++) {
            document.getElementById(i).style.backgroundImage = "url('http://www.asamblea.go.cr/Centro_de_informacion/SiteAssets/fondo%20blanco.png')";
        }
    }
}
