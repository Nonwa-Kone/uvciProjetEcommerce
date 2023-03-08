const products = [
    {
        "id":1,
        "title":"Banane",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/banane.png"
    },
    {
        "id":2,
        "title":"Champion",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/champion.jpg"
    },
    {
        "id":3,
        "title":"Jus",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusAnanas.png"
    },
    {
        "id":4,
        "title":"Lait",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/laitPoudre.png"
    },
    {
        "id":5,
        "title":"Fraise",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/fraise.png"
    },
    {
        "id":6,
        "title":"Mais",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/mais.jpg"
    },
    {
        "id":7,
        "title":"Lait",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/maisPoudre.png"
    },
    {
        "id":8,
        "title":"Pomme",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/Pomme.png"
    },
    {
        "id":9,
        "title":"Chocolat",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/PoudreDeChocolat.png"
    },
    {
        "id":10,
        "title":"Fraise",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/fraise.png"
    },
    {
        "id":11,
        "title":"Jus",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusAnanas.png"
    },
    {
        "id":12,
        "title":"Jus",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/pastheque.png"
    },
    {
        "id":13,
        "title":"Curcuma",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/JusOrange.png"
    },
    {
        "id":14,
        "title":"Jus",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDEfraise.png"
    },
    {
        "id":15,
        "title":"Poudre",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image": "image/cacaoPoudre.png"
    }
];

let product = JSON.stringify(products)

localStorage.setItem('products',product)

const productList = document.getElementById('product-list');

const listProducts = () =>{
    return (productList.innerHTML = products.map((product)=> {
        let {id, title, description, prix, image} = product;
        return `
        <div id=${id}>
            <img src=${image} alt="" />
                <p>
                  ${title} <br /><br />
                  Description : ${description}
                </p>
                <span
                  ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                ></span>
                <button onclick="detailProduct(id)">
                  <a href="produit.html?id=${id}"
                    >Acheter <i class="fa-solid fa-cart-shopping"></i
                  ></a>
                </button>
                <h5>${prix} FCFA</h5>
              </div>
        `;
    })
    )
}


listProducts()


destroy.addEventListener('click', (e) =>{
    location.pathname = './index.html';
});



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

document.getElementById('nbrearticle').innerText = getPannier().length;

