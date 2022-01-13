// height ball magic 


// on construit un tableau avec les réponses ! 
const answer = ["oui", "peut-etre", "jamais", "demande a ta grandmere", "si tu tire la chasse-d'eau", "le nain de jardin est passer par la fenetre", "j'ai tondu la chevre", "oui", "peut-etre", "jamais", "demande a ta grandmere", "si tu tire la chasse-d'eau", "le nain de jardin est passer par la fenetre", "j'ai tondu la chevre"];

// on definit res a la string "8" pour afficher le 8 de la eight ball 
var res = "8";

var can = document.getElementById("balls"); // selection de notre balise html

var ctx = can.getContext("2d"); // definition du contexte
can.style.border = "3px solid green";
document.body.style.display= " flex";
document.body.style.justifyContent = "center";


// on créer un champs texte pour la question
var question = document.createElement("input");
question.setAttribute("type", "text");
document.body.appendChild(question);


// on ajoute un bouton qui resort un chiffre aleatoire compris dans l'intervale du nombre d'element du tableau de réponse 
var button = document.createElement("button");
button.innerHTML = "SendAge";
document.body.appendChild(button);
button.onclick = function sendQuestion(text) { // au clic si la question n'est pas vide alors "text" récupere le contenue du champs text 

	if(question != ""){
		
		text = question.value;
		var response = Math.floor(Math.random() * answer.length ); // puis sort le chiffre aléatoire 
		
		if(text ==  " "){ // ici on s'assure de toujours afficher le "8" si aucuns text n'est valider 
			res = "8";
		} else {
			res = answer[response]; // et si jamais un text est validé alors on remplace le "8" par l'association (nombre aleatoire / index du tableau de réponse)
		}
		
		
		console.log(text);
		console.log(response); 
		console.log(res);
		ctx.font = "25px Arial";
		ctx.strokeText(res, 100, 350);// finalement on redessine soit avec le "8" ou une réponse aleatoire 
		setTimeout(resetBall, 2000);
	}



}



// dessins de l'emplacement de réponses dans la balle
function resetBall(){
// dessin du contour de la balle et de son fond 
ctx.beginPath();
ctx.arc(250, 250, 250, 0, 2 * Math.PI);
ctx.fillStyle ="black";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 350, 150, 0, 2 * Math.PI);
ctx.fillStyle ="white";
ctx.fill();


//  dessins du "8"
ctx.font = "150px Arial";
ctx.strokeText ("8", 210, 400);

}









