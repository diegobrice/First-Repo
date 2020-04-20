// EJEM: INDICAR SI UN NUMERO ES PAR

function esPar(num) {
  if(num % 2 == 0) {
    return `El numero ${num} es par`;
  }
  else {
    return "El numero " + num + " es impar";
  }
}

console.log(esPar(25));
console.log(esPar(38));


// EJEM: INDICAR SI UN NUMERO ES DIVISIBLE POR OTRO NUMERO

function esDivisible(num, div){
    if (num % div == 0){
        return `El numero ${num} es divisible entre ${div}`;
    }
    else{
        return  `El numero ${num} no es divisible entre ${div}`;
    }
}

console.log(esDivisible(25,5));
console.log(esDivisible(41,6));
