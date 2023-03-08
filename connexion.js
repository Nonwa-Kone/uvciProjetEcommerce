const connexion = () => {

	const form = document.querySelector("form");
	const email = document.getElementById("email");
	const motDePasse = document.getElementById("password");
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if((email.value == "" || email.value == " ") || (motDePasse.value == "" || motDePasse.value == " "))
		{
			alert("Veuillez renseigné tous les champs");
		}
		else{
            let userJSON = localStorage.getItem('users');
            let user = JSON.parse(userJSON);
			if (email.value == user.mail && motDePasse.value == user.password) {
				window.location.pathname="/boutique.html";
			}
			else{
				alert("Votre nom utilisateur ou mot de passe n'est pas correcte");
			}
		}
	});
}

connexion();
