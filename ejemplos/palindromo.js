// Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

var texto = "la ruta nos aporto otro paso natural";

var frase1 = texto.split(" ").join("");  //split borrar espacios, pero lo convierte en array y join volver a unir la palabra
var frase2 = frase1.split("").reverse().join("");  //crearmos un array con las letras de toda la frase a 

if (frase1 == frase2){
    console.log("Palindrome");
}
else{
    console.log("No es palindrome");
}


