// TOPIC: OPERADORES

// INCREMENTO Y DECREMENTO

var numero = 5;
++numero;           //numero = numero + 1;
console.log(numero);      // numero = 6

var numero = 5;
--numero;           //numero = numero - 1;
console.log(numero);      // numero = 4

var numero = 5;
numero++;           //numero = numero + 1;
console.log(numero);      // numero = 6

var numero = 5;
numero--;           //numero = numero - 1;
console.log(numero);      // numero = 4

// Si el operador ++ se indica como prefijo del identificador de la variable, su valor se incrementa antes de realizar cualquier otra operación. Si el operador ++ se indica como sufijo del identificador de la variable, su valor se incrementa después de ejecutar la sentencia en la que aparece.

// OPERADORES LOGICOS

// NEGACION
var visible = true;
console.log(!visible);  // Muestra "false" y no "true"
var cantidad = 0;
vacio = !cantidad;  // vacio = true
cantidad = 2;
vacio = !cantidad;  // vacio = false
var mensaje = "";
mensajeVacio = !mensaje;  // mensajeVacio = true
mensaje = "Bienvenido";
mensajeVacio = !mensaje;  // mensajeVacio = false

//AND && Y OR ||
// La operación lógica AND obtiene su resultado combinando dos valores booleanos. El operador se indica mediante el símbolo && y su resultado solamente es true si los dos operandos son true.
// La operación lógica OR también combina dos valores booleanos. El operador se indica mediante el símbolo || y su resultado es true si alguno de los dos operandos es true.

// MATEMATICOS

var x = 5;
var y = 3;
x += y;   // x = x + y = 8      SUMA
x -= y;   // x = x - y = 2      RESTA
x *= y;   // x = x * y = 15     MULTIPLICACION
x /= y;   // x = x / y = 1.66   DIVISION
x %= y;   // x = x % y = 2      MODULO 
x **= y;  // x = x ** y = 125   POTENCIA

// RELACIONALES

var numero1 = 3;
var numero2 = 5;
resultado = numero1 > numero2;  // resultado = false
resultado = numero1 < numero2;  // resultado = true
numero1 = 5;
numero2 = 5;
resultado = numero1 <= numero2; // resultado = true
resultado = numero1 == numero2; // resultado = true
resultado = numero1 != numero2; // resultado = false
var texto1 = "hola";
var texto2 = "hola";
var texto3 = "adios";
resultado = texto1 == texto3;   // resultado = false
resultado = texto1 != texto2;   // resultado = false
resultado = texto3 >= texto2;   // resultado = false

// Cuando se utilizan cadenas de texto, los operadores "mayor que" (>) y "menor que" (<) siguen un razonamiento no intuitivo: se compara letra a letra comenzando desde la izquierda hasta que se encuentre una diferencia entre las dos cadenas de texto. Para determinar si una letra es mayor o menor que otra, las mayúsculas se consideran menores que las minúsculas y las primeras letras del alfabeto son menores que las últimas (a es menor que b, b es menor que c, A es menor que a, etc.)