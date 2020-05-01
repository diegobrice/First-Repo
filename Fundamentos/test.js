var proba = () => Math.random() < 0.7;
var num = 0;
var nota = 10;

while (nota<20){
    debugger
    if (proba()){
        nota ++;
    } else {
        nota--;
    }
    console.log(nota);
    num++
}
console.log(num);


var cuenta = 0;
var llueve = () => Math.random() < 0.5;
var salir = true
do {
    cuenta ++;
    if (llueve()){
        console.log("esta lloviendo");
        salir = false;
        break;
    }
    console.log("no esta lloviendo");
    
} while (salir);

var txt = "vez";
(cuenta > 1) ? txt = "veces" : txt;
console.log(`Fui ${cuenta} ${txt} a verificar si llovia`);

