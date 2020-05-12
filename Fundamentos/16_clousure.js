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

var add = (function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();
