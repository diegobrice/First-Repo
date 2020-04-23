// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

var palabra="HOLAmundo"
mayus(palabra);

function mayus(cadena){
    var letras = cadena.split("");
    var cantidad = 0;
    for(i in letras) {
        if(letras[i] === letras[i].toUpperCase()){
            cantidad ++;
        }
    }
    if(cantidad==0){
        console.log(`La palabra ${palabra} esta formada solo por minusculas`);
    }
    else if(cantidad==cadena.length){
        console.log(`La palabra ${palabra} esta formada solo por mayusculas`);
    }
    else{
        console.log(`La palabra ${palabra} esta formada por ${cadena.length-cantidad} minusculas y ${cantidad} mayusculas`);
    }
    console.log(cantidad);
    return;
}