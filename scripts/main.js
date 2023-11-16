const inputs = document.querySelectorAll(".fields");

inputs.forEach(input => input.addEventListener("keyup", function (e) {
	document.getElementById("container").innerHTML = "<div><p>Ne donnez jamais vos identifiants et mots de passe à un site web ou une application.<p></div></br>"
}));
