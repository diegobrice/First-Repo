// TOPIC: FUNCIONES
// Las funciones en JavaScript se definen mediante la palabra reservada function, seguida del nombre de la función. Su definición formal es la siguiente:

function nombre_funcion() {
    return;
}

// Funciones Declarativas (function declaration / function statement)
// utilizamos la palabra reservada function al inicio para poder declarar la función

saludar("Diego");                   // llamar o invocar a la funcion (hoisting)
function saludar(nombre){           // funcion "saludar" recibe un parametro "nombre"
    console.log(`Hola ${nombre}`);  // (`Hola ${nombre}`) es lo mismo que ("Hola " + nombre)
}

// Funciones Expresivas  (function expression / funciones anónimas)
// la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima.

var sumar = function(a,b){
    return a + b;
}
console.log(sumar(5,2));

/* NOTE: 
A las funciones declarativas se les aplica  hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.*/

// EJEM: Funcion para calcular precio con impuestos y gastos de envio

function calculaPrecioTotal(precio, igv){
    gastosEnvio = 10;                                       //variable definida globalmente al no usar "var"
    var precioConImpuestos = (1 + igv/100) * precio;        //variable local dentro de la funcion
    var precioTotal = precioConImpuestos + gastosEnvio;
    return precioTotal.toFixed(2)*1;                        //redondear a 2 decimales
}
  
var precioTotal = calculaPrecioTotal(100, 18);
console.log(precioTotal);
console.log(gastosEnvio);
//console.log(precioConImpuestos);  
