// var nomusuario = prompt("¿Cual es tu nombre?");
// console.log(`La ultima letra de tu nombre es ${nomusuario.charAt(nomusuario.length-1)}`);

var precio = 20.1, cantidad = 3, total;
total = precio * cantidad;                  //no es tan preciso con los decimales 
console.log(total);                     
total = precio * 100 * cantidad / 100       //preciso con 2 decimales
console.log(total);                     
total = Math.round(precio * 100 * 3) / 100  //preciso con cualquier decimal
console.log(total);                     
var totalStr = total.toFixed(2);            //convertir a 2 decimales
console.log(totalStr);
var totalNum = parseFloat(totalStr);        //convertir a float (decimal)
console.log(totalNum);
var totalNum = parseInt(totalStr);          //convertir a integer (entero)
console.log(totalNum);
var totalNum = Number(totalStr);            //convertir a numero, incluye decimales
console.log(totalNum); 

console.log(Math.ceil(3.45));               //redondea hacia el mayor
console.log(Math.round(3.45));              //redondea
console.log(Math.floor(3.45));              //redondea hacia el menor