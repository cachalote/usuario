export class tresEnRaya {
    constructor() {
        this.mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
        this.jugador = 1;
    }
    //comprueba todas las casillas si estan o no ocupadas
    comprobarGanador(){
        var numEspacios=0;
        for (let i = 0; i < 9; i++) {
            if (this.mapa[i] == 0)
                numEspacios++;
        }
          // Las líneas horizontales
    if (this.mapa[0] == this.mapa[1] && this.mapa[1] == this.mapa[2] && this.mapa[0] != 0) return this.mapa[0];
    if (this.mapa[3] == this.mapa[4] && this.mapa[4] == this.mapa[5] && this.mapa[3] != 0) return this.mapa[3];
    if (this.mapa[6] == this.mapa[7] && this.mapa[7] == this.mapa[8] && this.mapa[6] != 0) return this.mapa[6];
    //Las líneas verticales
    if (this.mapa[0] == this.mapa[3] && this.mapa[3] == this.mapa[6] && this.mapa[0] != 0) return this.mapa[0];
    if (this.mapa[1] == this.mapa[4] && this.mapa[4] == this.mapa[7] && this.mapa[1] != 0) return this.mapa[1];
    if (this.mapa[2] == this.mapa[5] && this.mapa[5] == this.mapa[8] && this.mapa[2] != 0) return this.mapa[2];
    //Las diagonales
    if (this.mapa[0] == this.mapa[4] && this.mapa[4] == this.mapa[8] && this.mapa[0] != 0) return this.mapa[0];
    if (this.mapa[2] == this.mapa[4] && this.mapa[4] == this.mapa[6] && this.mapa[2] != 0) return this.mapa[2];
        if (numEspacios > 0) {
            return 0;
        } else {
            return 3;
        }

    }
    //Indica al jugador que le toca 
    seleccionCelda(celda) {
            if (this.jugador == 1) {
                this.mapa[celda] = 1; 
            } else {
                this.mapa[celda] = 2;
            }
            if(this.jugador ==1){
                this.jugador=2;
            }else{
                this.jugador=1;
            }    
    }
    //Ganador 
    ganador() {
        for (let i = 0; i < 9; i++) {
            if (this.mapa[i] == 0)
                this.numEspacios++;
        }
    }
    
  
}