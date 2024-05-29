$( 'input' ).on( 'input', function() {
	$( 'input' ).value = "";
	document.getElementById("container").innerHTML = "<div><p>Ne donnez jamais directement vos identifiants et mots de passe à un site web ou une application tierce.<p></div></br>"
});
