// TOPIC: OBJECTS


var auto = {
    marca: "mazda",
    modelo: "cx-3",
    distancia: 0,
    gasolina: 100,
    año: 2014,
    avanzar: function(){
        this.gasolina >= 20 ? (this.distancia += 100, this.gasolina -= 20):(console.log("No hay gasolina"))
    },
    llenarTanque: function(num){
        this.gasolina += num;
    }
}
console.log(auto);
auto.avanzar();
console.log(auto);
auto.llenarTanque(200);
console.log(auto);

function automovil(marca,modelo,año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var marcas = ["Toyota","Hyundai","Kia","Mazda","Chevrolet",];
var modelos = ["Sedan","Hatchback","Pick-up","Van","Camioneta",];
var años = [2020, 2019, 2018, 2017, 2016];
var autos = [];

for (var i = 0; i < 5; i++){
    var ale1 = getRandom(0,5), ale2 = getRandom(0,5), ale3 = getRandom(0,5);
    autos.push(new automovil(marcas[ale1],modelos[ale2],años[ale3]));
}
console.log(autos);
console.log(autos.length);


