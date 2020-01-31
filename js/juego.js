console.log("Jugando...");

/*function mostrar(){
	console.log("MOSTRANDO");
}*/
var posPlayer1 = 0;
var posPlayer2 = 0;
var jugando = true;
const SPEED = 10;
const DISTANCIA = 1200;

function inicializar(){
	var logo = document.getElementById("logo");
	// ALTERNATIVA BIND 1
	logo.onmouseover = function(){
		console.log("MOSTRANDO");
	}
	/* ALTERNATIVA BIND 2
	logo.addEventListener("mouseleave", function(){
		console.log("SALIENDO");
	});
	*/

}

function capturarPulsacion(tecla){
	//a minuscula player 1
	//l minuscula player 2
	if(jugando==true){
	console.log(tecla.key);
	if (tecla.key=="a"){
		console.log("Mueve player 1");
		posPlayer1=posPlayer1+SPEED;
		document.getElementById("player1").style.paddingLeft=posPlayer1+"px";
		if (posPlayer1 >= DISTANCIA){
//			alert("Ha ganado el jugador 1");
			document.getElementById("campeon").innerHTML="HA GANADO EN JUGADOR 1";
			document.getElementById("ap").play();
			jugando==false;
		}
	}

	if (tecla.key=="l"){
		console.log("Mueve player 2");
		posPlayer2=posPlayer2+SPEED;
		document.getElementById("player2").style.paddingLeft=posPlayer2+"px";
		if (posPlayer2 >= DISTANCIA){
//			alert("Ha ganado el jugador 2");
			document.getElementById("otrocampeon").innerHTML="HA GANADO EN JUGADOR 2";
			document.getElementById("ap").play();
			jugando==false;
		}
	}
	}
}

function zoom(idcoche){
	var coche = document.getElementById("player"+idCoche);
	coche.style.width="500px";
}

function antizoom(idcoche){
	var coche = document.getElementById("player"+idCoche);
	coche.style.width="250px";
}