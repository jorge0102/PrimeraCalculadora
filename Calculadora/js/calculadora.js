
let guardar = new Array();

//Guarda todo en el array
function load(dato){
	guardar.push(dato);
	//entra si dato es igula a nada .que nada es "="
	
	if (dato == ""){
		
		let comprimir = guardar.join('');
		let parseado = comprimir.toString();
		console.log("ENTROOOOO");
		
		try {
			document.getElementById("pantalla").value = eval(parseado);
			
		}
		catch(error) {
			document.getElementById("pantalla").value = "ERROR";
			block();			
		}
			
	}

}

//imprime los datos		
function add(dato){
	document.getElementById("pantalla").value += dato;
	load(dato);
}

//borra la pantalla
function erase(){
	desBlock()
	document.getElementById("pantalla").value = "";	
	guardar = [];
}

//compara los signos
function sing(signo){
	//console.log(signo)
	
	if(signo == uno || signo == dos || signo == tres || signo == cuatro || signo == cinco){
		document.getElementById("pantalla").value += signo;
		//console.log("Estoy dentro");
		load(signo);
	}
	
}

function block(){
	document.getElementById("boton").disabled = true;
	document.getElementById("boton1").disabled = true;
	document.getElementById("boton2").disabled = true;
	document.getElementById("boton3").disabled = true;
	document.getElementById("boton4").disabled = true;
	document.getElementById("boton5").disabled = true;
	document.getElementById("boton6").disabled = true;
	document.getElementById("boton7").disabled = true;
	document.getElementById("boton8").disabled = true;
	document.getElementById("boton9").disabled = true;
	document.getElementById("boton10").disabled = true;
	document.getElementById("boton11").disabled = true;
	document.getElementById("boton12").disabled = true;
	document.getElementById("boton13").disabled = true;
	document.getElementById("boton14").disabled = true;
}
function desBlock(){
	document.getElementById("boton").disabled = false;
	document.getElementById("boton1").disabled = false;
	document.getElementById("boton2").disabled = false;
	document.getElementById("boton3").disabled = false;
	document.getElementById("boton4").disabled = false;
	document.getElementById("boton5").disabled = false;
	document.getElementById("boton6").disabled = false;
	document.getElementById("boton7").disabled = false;
	document.getElementById("boton8").disabled = false;
	document.getElementById("boton9").disabled = false;
	document.getElementById("boton10").disabled = false;
	document.getElementById("boton11").disabled = false;
	document.getElementById("boton12").disabled = false;
	document.getElementById("boton13").disabled = false;
	document.getElementById("boton14").disabled = false;
}


const uno = "+";
const dos = "-";
const tres = "*";
const cuatro = "/";
const cinco = "";