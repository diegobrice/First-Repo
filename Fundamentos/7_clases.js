class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`);   
    }
    soymayor(){
        return this.edad > 17;
    }
    crecer(){
        this.edad++
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad)
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}, soy empleado y tengo ${this.edad}`);   
    }

}

var diego = new Persona("Diego","Briceño",17);
console.log(diego);
diego.saludar();
console.log(diego.soymayor());
diego.crecer();
console.log(diego);
diego.saludar();
console.log(diego.soymayor());

var alonso = new Empleado("Alonso","Calle",30);

console.log(alonso);
alonso.saludar();
console.log(alonso.soymayor());
alonso.crecer();
alonso.saludar();