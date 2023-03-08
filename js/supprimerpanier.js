// Fonction enregistrer le pannier dans localstorage
const enregistrerPannier = (basket) =>{
    localStorage.setItem("basket",JSON.stringify(basket));
}

const supprimer = (id) =>{
    let basket = getPannier();
    // On filtre les produit si l'id du produit passé en parametre different à l'id produit dans le pannier
    basket = basket.filter(p => p.id != id);
    // On sauvegarde le pannier
    enregistrerPannier(basket);
    
}