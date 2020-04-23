// TOPIC: FUNCIONES Y PROPIEDADES BASICAS

// CADENAS DE TEXTO

// length, calcula la longitud de una cadena de texto (el número de caracteres que la forman)
var mensaje = "Hola Mundo";
var numeroLetras = mensaje.length; // numeroLetras = 10

// +, se emplea para concatenar varias cadenas de texto
// Además del operador +, también se puede utilizar la función concat()
var mensaje1 = "Hola";
var mensaje2 = "Mundo";
var mensaje = mensaje1 + " " +mensaje2; // mensaje = "Hola Mundo"
var mensaje1 = "Hola";
var mensaje2 = mensaje1.concat(" Mundo"); // mensaje2 = "Hola Mundo"

// toUpperCase(), transforma todos los caracteres de la cadena a sus correspondientes caracteres en mayúsculas:
var mensaje1 = "Hola";
var mensaje2 = mensaje1.toUpperCase(); // mensaje2 = "HOLA"

// toLowerCase(), transforma todos los caracteres de la cadena a sus correspondientes caracteres en minúsculas:
var mensaje1 = "HolA";
var mensaje2 = mensaje1.toLowerCase(); // mensaje2 = "hola"

// charAt(posicion), obtiene el carácter que se encuentra en la posición indicada:
var mensaje = "Hola";
var letra = mensaje.charAt(0); // letra = H
letra = mensaje.charAt(2);     // letra = l

// indexOf(caracter), calcula la posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si el carácter se incluye varias veces dentro de la cadena de texto, se devuelve su primera posición empezando a buscar desde la izquierda. Si la cadena no contiene el carácter, la función devuelve el valor -1:
var mensaje = "Hola";
var posicion = mensaje.indexOf('a'); // posicion = 3
posicion = mensaje.indexOf('b');     // posicion = -1

// lastIndexOf(caracter), calcula la última posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1:
var mensaje = "Hola";
var posicion = mensaje.lastIndexOf('a'); // posicion = 3
posicion = mensaje.lastIndexOf('b');     // posicion = -1

// substring(inicio, final), extrae una porción de una cadena de texto. El segundo parámetro es opcional. Si sólo se indica el parámetro inicio, la función devuelve la parte de la cadena original correspondiente desde esa posición hasta el final:
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(2); // porcion = "la Mundo"
porcion = mensaje.substring(5);     // porcion = "Mundo"
porcion = mensaje.substring(7);     // porcion = "ndo"

// Si se indica un inicio negativo, se devuelve la misma cadena original:
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(-2); // porcion = "Hola Mundo"

// Cuando se indica el inicio y el final, se devuelve la parte de la cadena original comprendida entre la posición inicial y la inmediatamente anterior a la posición final (es decir, la posición inicio está incluida y la posición final no):
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(1, 8); // porcion = "ola Mun"
porcion = mensaje.substring(3, 4);     // porcion = "a"

// Si se indica un final más pequeño que el inicio, JavaScript los considera de forma inversa, ya que automáticamente asigna el valor más pequeño al inicio y el más grande al final:
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(5, 0); // porcion = "Hola "
porcion = mensaje.substring(0, 5);     // porcion = "Hola "

porcion = mensaje.substring(5,10);  // porcion = "Mundo" substring(caracter inicial, caracter final)
porcion = mensaje.substr(5,5);      // porcion = "Mundo" substr(caracter inicial, length)

// split(separador), convierte una cadena de texto en un array de cadenas de texto. La función parte la cadena de texto determinando sus trozos a partir del carácter separador indicado:
var mensaje = "Hola Mundo, soy una cadena de texto!";
var palabras = mensaje.split(" ");  // palabras = ["Hola", "Mundo,", "soy", "una", "cadena", "de", "texto!"];

// Con esta función se pueden extraer fácilmente las letras que forman una palabra:
var palabra = "Hola";
var letras = palabra.split("");     // letras = ["H", "o", "l", "a"]