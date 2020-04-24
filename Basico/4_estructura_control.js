// TOPIC: ESTRUCTURAS DE CONTROL

// ESTRUCTURA IF
// Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones que se encuentran dentro del if(). Si la condición no se cumple (es decir, si su valor es false) se ejecutan todas las instrucciones contenidas en else { }. 

var edad = 18;

if (edad == "") {
    console.log("No has ingresado tu edad");
} 
else if(edad >= 18) {
    console.log("Eres mayor de edad");
} 
else {
    console.log("Todavía eres menor de edad");
}

// OPERADOR CONDICIONAL TERNARIO condición ? expr1 : expr2 
// Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. 

var firstCheck = false, secondCheck = false, access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";
console.log( access ); // muestra "Acceso Permitido"

// ESTRUCTURA FOR

// La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la condición".
// La "inicialización" es la zona en la que se establece los valores iniciales de las variables que controlan la repetición.
// La "condición" es el único elemento que decide si continua o se detiene la repetición.
// La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(var i=0; i<dias.length; i++) {
  console.log(dias[i]);
}

// EJEM: El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120. Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

factorial(5);

function factorial(num){
    var res = 1;
    for(var i=1; i<=num; i++){
        res *= i
    }
    console.log(res);
}

console.log(factorialRecursivo(4));

function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
    }
	return n * factorialRecursivo(n-1); 
}

// ESTRUCTURA FOR IN
// Esta estructura de control es la más adecuada para recorrer arrays (y objetos), ya que evita tener que indicar la inicialización y las condiciones del bucle for simple y funciona correctamente cualquiera que sea la longitud del array. De hecho, sigue funcionando igual aunque varíe el número de elementos del array.

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(i in dias) {
  console.log(dias[i]);
}



