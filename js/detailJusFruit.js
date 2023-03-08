const detailProduct = document.getElementById('detail-product')
let lien = location.href;
// let productId = lien.split('?')[1];
// let id = parseInt(productId)

let url = new URL(lien);
let search_params = new URLSearchParams(url.search)

if (search_params.has('id')){
    var id = search_params.get('id')
    // alert(id);
}

// Fonction obtenir les produits stockés dans le localstorage
const getProduct = () =>{
    let products = localStorage.getItem("jusfruits");
    //Si products == null alors
    if (products == null) {
        // On retourne un tableau vide
        return [];
    }
    // Sinon on retourne le pannier
    else{
        return JSON.parse(products);
    }
}

let products = getProduct();

let productsearched = products.find(p => p.id == id);

detailProduct.innerHTML = `
    <div id=${productsearched.id}>
        <img src=${productsearched.image} alt="" />
        <h1>${productsearched.title}</h1>
        <span class="span1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i
        ></span>
        Avis (0)
        <h2>PRIX : ${productsearched.prix} FCFA</h2>
        <p>
            ${productsearched.description}
        </p>
        <h3>En stock: ${productsearched.quantiteStocker}</h3>
        <h3>Quantité commandée</h3>
        <span class="div"
        ><span >-</span><span id="demo">${productsearched.quantite}</span
        ><span>+</span></span
        >
        <button class="btn1" id="ajouterPannier">AJOUTER AU PANIER</button>><br /><br />
        <a href="https://wa.me/0768450541"
        ><button class="btn2">
            <i class="fa-brands fa-whatsapp"></i>COMMANDER SUR WHATSAPP
        </button></a
        ><br />
        <span class="span2"><i class="fa-regular fa-heart"></i></span
        >Ajouter a la liste des souhaits
    </div>
`;

// const increment = () =>{
//     let quantite = 0;
//     return quantite++;
// }
// document.getE lementById('demo').innerText = increment();

// Fonction enregistrer le pannier dans localstorage
const enregistrerPannier = (basket) =>{
    localStorage.setItem("basket",JSON.stringify(basket));
}

// // Fonction obtenir les produits stockés dans le localstorage
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

const ajouterAuPannier = (product) => {
    // Reccupperation du pannier dans le localstorage pour les stockés dans la variables basket
    let pannier = getPannier();
    // Rechercher l'Id du produit dans le pannier. S'il existe on stocke dans la variable foundProduct
    let foundProduct = pannier.find(p => p.id == product.id);
    // Si le produit n'est pas definir alors
    if (foundProduct != undefined) {
        //Quantite = Qauantite du produit + 1
        foundProduct.quantite++;
        // Sinon
    }else{
        // Quantite du produit = 1
        product.quantite = 1;
        // Ajout du produit dans le pannier
        pannier.push(product);
    }
    //Appelle de la fonction saveBasket pour la mise à ajout des modifications apporté au localstorage
    enregistrerPannier(pannier);
}

ajouterPannier.addEventListener('click', (e)=>{
    e.preventDefault();
    ajouterAuPannier(productsearched);
    alert("Vous avez ajouter cet produit au panier")
    location.pathname = 'jusfruits.html'
})