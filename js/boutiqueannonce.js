const boutiques = [
    {
        "id":1,
        "title":"Yaourt de mangue",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDeMangue.png"
    },
    {
        "id":2,
        "title":"Prune de yaourt",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/pruneyourt.png"
    },
    {
        "id":3,
        "title":"Poudre de lait",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/poudreDeLait.png"
    },
    {
        "id":4,
        "title":"Poudre de cacao",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/cacaoPoudre.png"
    },
    {
        "id":5,
        "title":"Yaourt de banane",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDebanane.png"
    },
    {
        "id":6,
        "title":"Cucuma",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/cucuma.jpg"
    },
    {
        "id":7,
        "title":"Lait au chocolat",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/laitAuChocolat.png"
    },
    {
        "id":8,
        "title":"Yaourt de banane",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDebanane.png"
    },
    {
        "id":9,
        "title":"Yaourt",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourt.png"
    },
    {
        "id":10,
        "title":"Pastheque",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/pastheque.png"
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

let boutique = JSON.stringify(boutiques)

localStorage.setItem('boutique',boutique)

const boutiqueAnnonce = document.getElementById('boutique-annonce');

const listAnnonces = () =>{
    return (boutiqueAnnonce.innerHTML = boutiques.map((product)=> {
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
            <button>
              <a href="details/boutique.html?id=${id}"
                >Acheter <i class="fa-solid fa-cart-shopping"></i
              ></a>
            </button>
            <h5>${prix} FCFA</h5>
        </div>
        `;
    })
    )
}


listAnnonces()
