/*var BotonAlert = document.getElementById
			("BotonAlert");

			console.log(BotonAlert); 

			BotonAlert.onclick = function(){
				alert ("hola mundo Alert")
			}

var BotonConfirm = document.getElementById
			("BotonConfirm");

			console.log(BotonConfirm); 

			BotonConfirm.onclick = function(){
				alert ("hola mundo Confirm")
			}

var BotonPrompt = document.getElementById
			("BotonPrompt");

			console.log(BotonPrompt); 

			BotonPrompt.onclick = function(){
				alert ("hola mundo Prompt")
			}


function invertirDigitos(numero)
	{ 
	var invertido = 0 //se declara un acumulador el cual almacena la secuencia de resto
	var resto = numero
	do {
	invertido = invertido * 10 + (resto % 10)
	//para hacer que el resto se desplace a la izquierda se multiplica por 10
	resto = Math.floor(resto / 10) 
	} while ( resto > 0 )
	return invertido
}
let botonInvertir = document.getElementById("botonInvertir");
botonInvertir.onclick = function(){

	let numeroInvertirTexto = document.getElementById("numeroInvertirTexto").value;
	let numeroInvertido =  invertirDigitos(numeroInvertirTexto);
	
	let textoSalida = document.getElementById("textoSalida");
	
	textoSalida.innerHTML = "El numero invertido es: "
	+ numeroInvertido;
}

function tablaMultiplicar(numeroTabla){
	num = numeroTabla;
	let resultado = [];
	for (let i = 1; i <= 10 ; i++){
			resultado.push(i * num);
			console.log(resultado);		
	}
}

let botonMulti = document.getElementById("botonMulti");
botonMulti.onclick = function(){
	alert ("funciono!")
	let numeroMulti = document.getElementById("numeroMulti").value;
	let multip = tablaMultiplicar(numeroMulti);

	let tabla = document.getElementById("tabla");
	
	tabla.innerHTML = multip;
}*/

/*ejercicio3
document.getElementById("btnpuchar").onclick = function(){
	puchame();{ //llama a la función al precionar al boton 

	};

}
function puchame(){
	var numproducto = document.getElementById("txtbutonNproducto").value; //guarda el valor del los text boxs
	var producto = document.getElementById("txtbutonproducto").value;
	var precio = document.getElementById("txtbutonprecio").value;

	if(numproducto ==1){ //actualiza primer producto 
		if(producto ==""){
			document.getElementById("numproduct1").textContent = numproducto;
			document.getElementById("precio1").textContent = precio;

		}
		else if(precio==""){
			document.getElementById("numproduct1").textContent = numproducto;
			document.getElementById("product1").textContent = producto;


		}
		else{
			document.getElementById("numproduct1").textContent = numproducto;
			document.getElementById("product1").textContent = producto;
			document.getElementById("precio1").textContent = precio;

		} 
	}
	else if(numproducto ==2){ //actualiza primer producto 
		if(producto ==""){
			document.getElementById("numproduct2").textContent = numproducto;
			document.getElementById("precio2").textContent = precio;

		}
		else if(precio==""){
			document.getElementById("numproduct2").textContent = numproducto;
			document.getElementById("product1").textContent = producto;


		}
		else{
			document.getElementById("numproduct2").textContent = numproducto;
			document.getElementById("product2").textContent = producto;
			document.getElementById("precio2").textContent = precio;

		} 

}
else if(numproducto ==3){ //actualiza primer producto 
	if(producto ==""){
		document.getElementById("numproduct3").textContent = numproducto;
		document.getElementById("precio3").textContent = precio;

	}
	else if(precio==""){
		document.getElementById("numproduct3").textContent = numproducto;
		document.getElementById("product3").textContent = producto;


	}
	else{
		document.getElementById("numproduct3").textContent = numproducto;
		document.getElementById("product3").textContent = producto;
		document.getElementById("precio3").textContent = precio;

	} 
}
else{
alert("el valor no puede ser menor o igual a cero o mayor al total de productos")
}
}
*/

