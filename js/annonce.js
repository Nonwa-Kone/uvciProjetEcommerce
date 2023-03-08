const annonces = [
    {
        "id":1,
        "title":"Jus d'orange",
        "description":"Du bio de notre jardin",
        "prix":800,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/JusOrange.png"
    },
    {
        "id":2,
        "title":"Rasin",
        "description":"Du bio de notre jardin",
        "prix":2000,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/raisin.jpg"
    },
    {
        "id":3,
        "title":"Yaourt d'ananas",
        "description":"Du bio de notre jardin",
        "prix":500,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDananas.png"
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
];

let annonce = JSON.stringify(annonces)

localStorage.setItem('annonces',annonce)

const annonceList = document.getElementById('annonce-list');

const listAnnonces = () =>{
    return (annonceList.innerHTML = annonces.map((product)=> {
        let {id, title, description, prix, image} = product;
        return `
        <div id=${id}>
            <b>Nouveauté</b>
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
              <a href="details/detailannonce.html?id=${id}"
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
