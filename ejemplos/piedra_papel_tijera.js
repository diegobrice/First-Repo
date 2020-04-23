function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function jugar(){
    var jugador1 = getRandom(0,3), jugador2 = getRandom(0,3);
    var juego=["piedra","papel","tijera"];
    var resultado = `Jugador 1 escoge ${juego[jugador1]} y Jugador 2 escoge ${juego[jugador2]} `
    
    if (jugador1 != jugador2){
        if ((jugador1 == 0 && jugador2 == 2) || 
            (jugador1 == 1 && jugador2 == 0) || 
            (jugador1 == 2 && jugador2 == 1)){
            resultado += "Jugador 1 Gana";
        } else {
            resultado += "Jugador 2 Gana";
        }
    } else {
        resultado += "Empate";
    }
    console.log(resultado);
}
    
for (var i=0;i<20;i++){
    jugar();
}