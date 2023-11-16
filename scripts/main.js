let baseUrl = "https://api.ecoledirecte.com/v3";
const body = document.getElementsByTagName("body")[0];
let fields;
const submitButton = document.getElementById("submit");
const inputs = document.querySelectorAll(".fields");

inputs.forEach(input => input.addEventListener("keypress", function (e) {
	alert("NE DONNEZ JAMAIS VOS IDENTIFIANTS ET MOTS DE PASSE !");
}));
