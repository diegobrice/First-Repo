// TOPIC: VARIABLES

var num;    // declaracion de variable
num = 8;    // inicializacion de variable

// nombre de una variable se conoce como identificador, solo puede estar formado por letras, numeros, y los simbolos $ (dolar) y _ (guion bajo), el primer caracter no puede ser un numero.

// NOTE: Diferencias entre let, var y const.

// TIPOS DE VARIABLES

// NUMERICAS

var igv = 18            // variable tipo integer (entero)
var total = 221.40      // variable tipo float (decimal)

// CADENAS DE TEXTO

var mensaje = "Bienvenido a nuestro sitio web";
var nombreProducto = 'Producto ABC';
var texto1 = "Una frase con 'comillas simples' dentro";
var texto2 = 'Una frase con "comillas dobles" dentro';
var texto3 = "Una frase con comillas 'simples' y \"dobles\"";

/*
Una nueva línea	    \n
Un tabulador	    \t
Una comilla simple	\'
Una comilla doble	\"
Una barra inclinada	\\
*/

// ARRAYS tambien son llamados vectores, matrices o arreglos.

var array = [1,2,3,4,5,6];  //esto es un objeto
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Una vez definido un array, es muy sencillo acceder a cada uno de sus elementos. Cada elemento se accede indicando su posición dentro del array. La única complicación, que es responsable de muchos errores cuando se empieza a programar, es que las posiciones de los elementos empiezan a contarse en el 0 y no en el 1

var diaSeleccionado = dias[0];

// OBJETO

var persona = {
    nombre: "Diego",
    edad: 28,
    activo: true
};

// BOOLEAN variable de tipo logico
// Una variable de tipo boolean almacena un tipo especial de valor que solamente puede tomar dos valores: true (verdadero) o false (falso). No se puede utilizar para almacenar números y tampoco permite guardar cadenas de texto.


var clienteRegistrado = false;
var ivaIncluido = true;


// EJEM: impresion en consola de un array que contiene diferentes tipos de valores.

var elementos = ["hola",true,"mundo",2,true, [1,2]];

elementos.forEach(dato => {         //NOTE: investigar (forEach para arreglos, for in para objetos)
    console.log(dato);
    console.log(typeof dato);
});

for (i in elementos){
    console.log(elementos[i]);
    console.log(typeof elementos[i]);   
}

for (var elemento of elementos){
    console.log(elemento);
    console.log(typeof elemento);   
}

var persona1 = {
    nombre: "Diego",
    edad: 28,
    activo: true
};

var persona2 = {
    nombre: "Alonso",
    edad: 30,
    activo: true
};

var personas = [persona1, persona2];
console.log(personas);
console.log(personas[0]["edad"]);       //es lo mismo que: console.log(personas[0].edad);
