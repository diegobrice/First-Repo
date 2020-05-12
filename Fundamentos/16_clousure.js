function descuentos(desc) {
  return function (precio) {
    return precio - precio * desc;
  };
}

const desc10 = descuentos(0.1);
const desc25 = descuentos(0.25);
const desc50 = descuentos(0.5);

console.log(desc10(10));
console.log(desc25(10));
console.log(desc50(10));

function descuento(precio, desc) {
  return precio - precio * desc;
}

console.log(descuento(10, 0.1));
console.log(descuento(10, 0.25));
console.log(descuento(10, 0.5));
