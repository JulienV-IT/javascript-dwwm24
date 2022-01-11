

// selection du body avec le raccourci integré a javascript (document.body)
var corp = document.body;
corp.style.display = "flex"; // debut de la customisation css via le javascript 
corp.style.justifyContent = "center";
corp.style.border = "7px solid green"; // attribution css d'une bordure via js



// selection du container principale 
var cont = document.getElementById("main");
	cont.style.display = "flex";
	cont.style.justifyContent = "center";
	cont.style.border = "3px solid red";
	cont.style.height = "500px";
	cont.style.width = "500px";
	
	


// selection de la div d'affichage du JS
var divfunc = document.getElementById("function");


// creation du champs utilisateur (text)
var entry = document.createElement("input"); // creation
entry.style.border = "2px solid green"; // style
entry.setAttribute("type", "text"); // attribut type/text
entry.setAttribute("id", "entry"); // attribut id 
cont.appendChild(entry); // ajout de l'element input au container principale




// creation du button 
var button = document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML = "tryMe";
button.onclick = function(){blablater()}; // affectation de la function au click 
cont.appendChild(button); // ajout du bouton au container 



// definition de la fonction d'affichage du champs text
function blablater(){
	var x = document.getElementById("entry").value;
	document.getElementById("function").innerHTML = x; // affichage de la valeur du champs text 
	
}








// appel de fonction

/*
function getDiv(id){
	var divid = document.getElementById(id);
}

getDiv('function');


*/

// definition standard de fonction sans paramettre
/*function nomdefonction(){

}*/


// appel de fonction standard sans paramettre
/*nomdefonction()*/