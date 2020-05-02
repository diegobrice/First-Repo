function saludar (){
    document.getElementById("reemplaza").innerHTML = "1. Hello";
    document.getElementById("reemplaza2").innerHTML = "Parrafo modificado: <br> 4 x 5 = " + 4*5 + "<br> 4 x 6 = " + 4*6;
    document.getElementById("modifica").style.fontSize = "35px";
    document.getElementById("visible").style.display = "none";
    document.getElementById("oculto").style.display = "block";
    document.getElementById("myImage").src="img/pic_bulbon.gif";
    // document.write(5 + 6);  //delete all existing HTML
    // window.alert(5 + 6);    //alert box
    // window.print();         //imprimir

}