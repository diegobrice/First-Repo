var persona = {
    nombre: "Diego",
    edad: 28
}

function saludar({nombre,edad}){            //accede solo a los atributos nombre y edad del objeto recibido
    console.log(`Hola ${nombre.toUpperCase()}, tu edad es ${edad}`);
}
saludar(persona);                           //enviamos el objeto como parametro a la funcion
saludar({nombre: "Alonso",edad: 30});

function saludarMAYUS(person){               
    var {nombre} = persona;                 //var nombre = persona.nombre; DESTRUCTURAR OBJETOS
    var {edad} = persona;                   //var edad = persona.edad;
    console.log(`Hola ${nombre.toUpperCase()}, tu edad es ${edad}`);
}
saludarMAYUS(persona);              

var esmayor = ({edad}) => (edad) > 18 ? "Es mayor": "Es menor";

console.log(esmayor(persona));
console.log(esmayor({edad: 16}));

