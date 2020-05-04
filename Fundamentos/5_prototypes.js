function nota(detalle, etiqueta, puntos){
    this.detalle = detalle;
    this.etiqueta = etiqueta;
    this.puntos = puntos;
    this.mostrar = function(){
        console.log(`Tarea pendiente: ${this.detalle}`);
    }
}

nota.prototype.imprimir = function(){
    console.log(this);
}

nota.prototype.puntaje = function(){
    if (this.puntos > 3){
        console.log(`${this.detalle} tiene una nota dificil de: ${this.puntos}`)
    } else {
        console.log(`${this.detalle} tiene una nota facil de: ${this.puntos}`)
    }
}

var uno = new nota("Completar curso","Estudio",5);
var dos = new nota("Leer libro","Lectura",3);

uno.mostrar();
dos.mostrar();
uno.imprimir();
dos.imprimir();
uno.puntaje();
dos.puntaje();