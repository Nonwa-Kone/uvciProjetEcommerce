const inscription = () => {

	const form = document.querySelector("form");
	const nomUtilisateur = document.getElementById("username");
    const email = document.getElementById("email");
	const motDePasse = document.getElementById("password");
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if((nomUtilisateur.value == "" || nomUtilisateur.value == " ") || (motDePasse.value == "" || motDePasse.value == " "))
		{
			alert("Veuillez renseigné tous les champs");
		}
		else{
            let username = nomUtilisateur.value
            let mail = email.value
            let password = motDePasse.value
			data = {
                username,
                mail,
                password
            }
            let user = JSON.stringify(data);
            localStorage.setItem("users",user);
            location.pathname = 'connexion.html'
		}
	});
}

inscription();