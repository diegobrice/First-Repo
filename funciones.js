// FUNCIONES

// Funciones Declarativas (function declaration / function statement)
// utilizamos la palabra reservada function al inicio para poder declarar la función

saludar("Diego");
function saludar(nombre){           // funcion "saludar" recibe un parametro "nombre"
    console.log(`Hola ${nombre}`);  // (`Hola ${nombre}`) es lo mismo que ("Hola " + nombre)
}

// Funciones Expresivas  (function expression / funciones anónimas)
// la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima.

var sumar = function(a,b){
    return a + b;
}
console.log(sumar(5,2));

/*Diferencias:
A las funciones declarativas se les aplica NOTE: hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.*/