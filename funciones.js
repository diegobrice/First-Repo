// FUNCIONES

// Funciones Declarativas 
function saludar(nombre){           // funcion "saludar" recibe un parametro "nombre"
    console.log(`Hola ${nombre}`);  // (`Hola ${nombre}`) = ("Hola " + nombre)
}
saludar("Diego");

// Funciones Expresivas
var sumar = function(a,b){
    return a + b;
}
console.log(sumar(5,2));