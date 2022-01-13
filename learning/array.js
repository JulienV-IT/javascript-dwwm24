/*const cars = ["Saab", "Volvo", "BMW"];
var divDemo = document.getElementById("demo");
divDemo.innerHTML = "<strong>Dans mon garage il y a :</strong> " + cars;


var paragraphe1 = document.createElement("p");
paragraphe1.innerHTML = "<strong>La premiere voiture est une:  </strong>" + cars[0];
divDemo.appendChild(paragraphe1);

var paragraphe2 = document.createElement("p");
paragraphe2.innerHTML = " <strong>La seconde voiture est une: </strong>" + cars[1];
divDemo.appendChild(paragraphe2);

var paragraphe3 = document.createElement("p");
paragraphe3.innerHTML = "<strong>La troisieme voiture est une: </strong>" + cars[2];
divDemo.appendChild(paragraphe3);
*/



const answer = ["oui", "peut-etre", "jamais", "demande a ta grandmere", "si tu tire la chasse-d'eau", "le nain de jardin est passer par la fenetre", "j'ai tondu la chevre"];

// boucle for


var titreFor = document.createElement("h1");
titreFor.innerHTML = "boucle for";
document.body.appendChild(titreFor);




for (var i = 0; i < answer.length; i++) {
/*	var loopfor = document.createElement("p");
	loopfor.innerHTML= answer[i];
	document.body.appendChild(loopfor);*/
	console.log(answer[i]);
}

// boucle foreach

var titreForEach = document.createElement("h1");
titreForEach.innerHTML = "boucle forEach";
document.body.appendChild(titreForEach);

answer.forEach(function (item) {
	/*var loopForEach = document.createElement("p");
	loopForEach.innerHTML= item;
	document.body.appendChild(loopForEach);	*/
	console.log(item);
})



//boucle while

var titreWhile = document.createElement("h1");
titreWhile.innerHTML = "boucle While";
document.body.appendChild(titreWhile);




var startWhile = document.createElement("input");
startWhile.setAttribute("type", "number");
document.body.appendChild(startWhile);

var button = document.createElement("button");
button.innerHTML = "SendAge";
document.body.appendChild(button);

var major = document.createElement("p");
major.style.border = "2px solid green";
document.body.appendChild(major);

var minor = document.createElement("p");
minor.style.border = "2px solid red";
document.body.appendChild(minor);

button.onclick = function SendAge(age) {

	if(startWhile != ""){
		var age = startWhile.value;
		console.log(age)
	}
		switch(true){
		
		case age >= 18:
			major.innerHTML = "+18";
			console.log("18+");
		break;	
		
		case age <= 16:
			minor.innerHTML = "-16";
			console.log("-16");
		break;

		default:
			console.log("default");
		break;	

		}
}


/*
while(startWhile !== true){
	var whiled = document.createElement("p");
	whiled.innerHTML = "whilefalse";
	document.body.appendChild(whiled);	
	

}*/


// if else / if elseif 


/*if(startWhile >= 18){
	console.log("its ok");
} else if(startWhile < 16)  {
	console.log("nope");
} else {
	console.log("what do u excecpt");
}*/


// switch case












