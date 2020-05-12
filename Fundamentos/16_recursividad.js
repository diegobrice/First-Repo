// FUNCIONES RECURSIVAS
function division(dividendo, divisor) {
  if (dividendo < divisor) {
    return 0;
  }
  return 1 + division(dividendo - divisor, divisor);
}

function multiplicacion(factor1, factor2) {
  if (factor1 === 0 || factor2 === 0) {
    return 0;
  }
  return factor1 + multiplicacion(factor1, factor2 - 1);
}

function sumatoria(num) {
  if (num === 0) return 0;
  return num + sumatoria(num - 1);
}

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

const diego = {
  nombre: "Diego",
  edad: 28,
};

function saludar() {
  console.log(`Hola ${this.nombre}`);
}

const saludarDiego = saludar.bind(diego);
saludarDiego();
