// TOPIC: ESTRUCTURAS AVANZADAS

// SWITCH
// La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
// En estos casos, la estructura switch es la más eficiente, ya que está especialmente diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable. Su definición formal puede parecer compleja, aunque su uso es muy sencillo:

var num = 12; rest = num%2;

switch(true){
    case (rest == 0):
        console.log(num + " es par");
    break;
    case (rest == 1):
        console.log(num + " es impar");
    break;
    default:
        console.log("Indefinido");
    break;
}

// WHILE
// La estructura while permite crear bucles que se ejecutan ninguna o más veces, dependiendo de la condición indicada. El funcionamiento del bucle while se resume en: "mientras se cumpla la condición indicada, repite indefinidamente las instrucciones incluidas dentro del bucle".
// Si la condición no se cumple ni siquiera la primera vez, el bucle no se ejecuta. Si la condición se cumple, se ejecutan las instrucciones una vez y se vuelve a comprobar la condición. Si se sigue cumpliendo la condición, se vuelve a ejecutar el bucle y así se continúa hasta que la condición no se cumpla.

var estudiantes = ["diego","alonso","marcelo","pepe"]
function saludar(estudiante){
    console.log("Hola "+ estudiante)
}
while (estudiantes.length>0) {
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}

// EJEM: FACTORIAL

var resultado = 1, numero = 5, i = 1;
while(i <= numero) {
  resultado *= i;
  i++;
}
console.log(resultado);

// DO WHILE

// El bucle de tipo do...while es muy similar al bucle while, salvo que en este caso siempre se ejecutan las instrucciones del bucle al menos la primera vez. De esta forma, como la condición se comprueba después de cada repetición, la primera vez siempre se ejecutan las instrucciones del bucle. Es importante no olvidar que después del while() se debe añadir el carácter ; (al contrario de lo que sucede con el bucle while simple).

var resultado = 1;
var numero = 5;

do {
  resultado *= numero;  // resultado = resultado * numero
  numero--;
} while(numero > 0);

console.log(resultado);