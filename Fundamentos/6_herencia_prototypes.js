function persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    // this.crecer = function () {
    //     this.edad ++;
    // }
}

persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`);
    
}

persona.prototype.soymayor = function(){
    return this.edad > 17;
}

persona.prototype.crecer = function(){
    this.edad++
}

var diego = new persona("Diego","Briceño",17);
console.log(diego);
diego.saludar();
console.log(diego.soymayor());
diego.crecer();
console.log(diego);
diego.saludar();
console.log(diego.soymayor());

function empleado(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

heredaDe(empleado,persona);

var alonso = new empleado("Alonso","Calle",30);

console.log(alonso);
alonso.saludar();
console.log(alonso.soymayor());
alonso.crecer();
alonso.saludar();