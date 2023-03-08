const pannier = document.getElementById('pannier');

// Fonction obtenir les produits stockés dans le localstorage
const getPannier = () =>{
    let basket = localStorage.getItem("basket");
    //Si basket == null alors
    if (basket == null) {
        // On retourne un tableau vide
        return [];
    }
    // Sinon on retourne le pannier
    else{
        return JSON.parse(basket);
    }
}

console.log(getPannier());

const paniers = () =>{
    let listPanier = getPannier();
    return (pannier.innerHTML = listPanier.map((product)=> {
        let {id, title, description, prix, quantite, image} = product;
        return `
            <div id="${id}" class="card" style="margin-bottom:10px;height:120px;width:100%;border:1px solid #000;display:flex; justify-content:space-around;">
                <div class="right">
                    <img src=${image} alt="" style="width:100px;"/>
                </div>
                <div class="left" style="width:80%;display:flex;flex-direction:row;justify-content:space-around;">
                    <h3>${title}</h3>
                    <b>${prix} FCFA</b>
                   <strong> ${quantite} Unité</strong>             
                </div>
                <button class="btn" onclick="supprimer(${id})"><a href="">supprimer</a></button>
            </div>
        `;
    }).join('')
    )
}

paniers()

const getTotalPrice = () => {
    let basket = getPannier();
    let total = 0;
    for (const product of basket) {
        total += product.quantite * product.prix;
    }
    return total;
}

document.getElementById('prix').innerText = getTotalPrice() + ' FCFA';
document.getElementById('prixtotal').innerText = getTotalPrice() + ' FCFA';

valider.addEventListener('click', (e)=>{
    alert("Votre commande a été valider")
})