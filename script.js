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


