// function comb(alfabeto, n, resultados, resultado) {
//     if(!resultado) {
//         resultado = [];
//     }
//     for(var i=0; i<alfabeto.length; ++i) {
//         var newResultado = resultado.slice();
//         var newAlfabeto = alfabeto.slice();
//         newResultado.push(alfabeto[i]);
//         newAlfabeto.splice(i, 1);
//         if(n>1) {
//             comb(newAlfabeto, n-1, resultados, newResultado);
//         } else {
//             resultados.push(newResultado);
//         }
//     }
// }

// var cadena = [1];//Caracteres que va a combinar
// var arrayCombinaciones = [];//Almacena las combinaciones
// var grupo = cadena.length;//le indico la cantidad de cuantos caracteres quiero que sean las combinaciones.

// comb(cadena, grupo, arrayCombinaciones);    
       
// console.log(arrayCombinaciones);

lista = [1,2,3];

var newResultado = [];

for(var i=0; i<lista.length; ++i) {
var newLista = lista.slice();
newResultado.push(lista[i]);
newLista.splice(i, 1);
newLista.splice()
console.log(newLista);
}

console.log(newResultado);