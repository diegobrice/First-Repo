class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludar(fn) {
    // var nombre = this.nombre;
    // var apellido = this.apellido;
    // var edad = this.edad;
    var { nombre, apellido, edad } = this;
    console.log(`Hola me llamo ${nombre} y tengo ${edad}`);
    if (fn) {
      responderSaludo(nombre, apellido);
    }
  }
  soymayor() {
    return this.edad > 17;
  }
  crecer() {
    this.edad++;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
  }
  saludar(fn) {
    console.log(
      `Hola me llamo ${this.nombre}, soy empleado y tengo ${this.edad}`
    );
    if (fn) {
      responderSaludo(this.nombre, this.apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esEmpleado) {
  console.log(`Buen dia ${nombre}`);
  if (esEmpleado) {
    console.log(`Bienvenido empleado`);
  }
}

var diego = new Persona("Diego", "Briceño", 17);
var alonso = new Empleado("Alonso", "Calle", 30);
diego.saludar();
alonso.saludar();
diego.saludar(responderSaludo);
alonso.saludar(responderSaludo);

setTimeout(() => console.log("Al final"), 0);
console.log("hola");
