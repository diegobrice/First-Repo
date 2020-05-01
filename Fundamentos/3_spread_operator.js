var a = 5;
var b = a;

a += 5;
console.log(a);
console.log(b);

var num = [1,2];
var num_copia = num;

console.log(num);
num.push(3);
console.log(num);
console.log(num_copia);

var diego = {
    nombre: "DIEGO"
}

var diego_copia = {     // creando un nuevo objeto
    ... diego
}

var copia = diego;      // creando una nueva variable hace referencia al objeto

console.log(diego == diego_copia);
console.log(diego == copia)

var frutas = ["fresa","naranja"];
var frutas2 = [...frutas,"platano"];
console.log(frutas);
console.log(frutas2);




var persona = {
    nombre: "Diego",
    edad: 28
}                 

function cumple(person){                    //function para retornar un nuevo objeto modificado
    return{
        ...persona,                         //NOTE: Spread operator (propagacion), duplica arrays y objetos
        edad: persona.edad+1
    }
}

var persona2 = cumple(persona);
console.log(persona2);
