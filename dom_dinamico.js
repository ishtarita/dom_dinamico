/*var contenedor1 = document.createElement("div");
contenedor1.setAttribute("id", "contenedor1");
contenedor1.setAttribute("style", "border: rgb(123, 123, 210) 5px solid");

var cajaTexto = document.createElement("input");
cajaTexto.setAttribute("id", "cajaTexto");
cajaTexto.setAttribute("placeholder", "numero a invertir");

var botonInvertir = document.createElement("button");
botonInvertir.setAttribute("id", "botonInvertir");
botonInvertir.innerHTML = "Invertir";

var parrafo1 = document.createElement("p");
parrafo1.setAttribute("id", "parrafo1");
parrafo1.innerHTML = "El numero invetrido es: ";

contenedor1.appendChild(cajaTexto);
contenedor1.appendChild(botonInvertir);
contenedor1.appendChild(parrafo1);

document.body.appendChild(contenedor1);


var botonInvertir = document.getElementById(botonInvertir);

botonInvertir.onclick = function(){
	let numeroInvertir = document.getElementById("cajaTexto1").value;
	let parrafo1 = document.getElementById("parrafo1");
	parrafo1.innerHTML = "El numeor invertido es: "+ invertirDigitos(numeroInvertir);

}*/
 alert ("fwsefwsfqa");

var contenedor1 = document.createElement("div");
contenedor1.setAttribute("id", "contanador1");
contenedor1.setAttribute("style", "border: rgb(123, 123, 210) 5px solid");

var tabl1 = document.createElement("table");
tabl1.setAttribute("id", "tabl1");

var trTab1 = document.createElement("tr");
trTab1.setAttribute("id", "ttTab");

var thTab1 = document.createElement("th");
thTab1.setAttribute("id", "thTab1");
thTab1.innerHTML = "Num producto "; 

var thTab2 = document.createElement("th");
thTab2.setAttribute("id", "thTab2");
thTab2.innerHTML = "Nom producto "; 

var thTab3 = document.createElement("th");
thTab3.setAttribute("id", "thTab3");
thTab3.innerHTML = "Precio "; 


contenedor1.appendChild(tabl1)
contenedor1.appendChild(trTab1);
contenedor1.appendChild(thTab1);
contenedor1.appendChild(thTab2);
contenedor1.appendChild(thTab3);


document.body.appendChild(contenedor1);
