// TOPIC: VARIABLES

var num;    // declaracion de variable
num = 8;    // inicializacion de variable

/* nombre de una variable = identificador, 
puede estar formado por letras, numeros, y los simbolos $ (dolar) y _ (guion bajo), 
el primer caracter no puede ser un numero. */

// TIPOS DE VARIABLES

// NUMERICAS
// CADENAS DE TEXTO

var array = [1,2,3,4,5,6]; //esto es un objeto

var persona = {
    nombre: "Diego",
    edad: 28,
    activo: true
};

console.log(array);
console.log(typeof array);
console.log(persona);
console.log(typeof persona);
console.log(persona.edad);
console.log(typeof persona.edad);
console.log(persona.nombre);
console.log(typeof persona.nombre);
console.log(persona.activo);
console.log(typeof persona.activo);

var elementos = ["hola",true,"mundo",2,true, [1,2]];
console.log(elementos[5]);

elementos.forEach(e => {
    console.log(typeof e);
});

console.log(!persona.edad);
console.log(5**3);

