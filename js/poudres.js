const poudres = [
    {
        "id":1,
        "title":"Poudre de cacao",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/poudredeCacao.png"
    },
    {
        "id":2,
        "title":"Poudre de lait",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/poudreDeLait.png"
    },
    {
        "id":3,
        "title":"Poudre de mais",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/poudreMais.png"
    },
    {
        "id":4,
        "title":"Poudre de chocolat",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/PoudreDeChocolat.png"
    },
    {
        "id":5,
        "title":"Poudre de lait",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/laitPoudre.png"
    },
    {
        "id":6,
        "title":"Poudre de mais",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/maisPoudre.png"
    },
    {
        "id":7,
        "title":"Mais",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/mais.jpg"
    },
    {
        "id":8,
        "title":"Poudre de cacao",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/cacaoPoudre.png"
    },
    {
        "id":9,
        "title":"Poudre de lait",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/laitPoudre.png"
    },
    {
        "id":10,
        "title":"Poudre de chocolat",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/PoudreDeChocolat.png"
    }
    ,
    {
        "id":11,
        "title":"Poudre de cacao",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/cacaoPoudre.png"
    }
];

const listJusFruits = () =>{
    return (poudreList.innerHTML = poudres.map((product)=> {
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
                  <a href="details/detailpoudre.html?id=${id}"
                    >Acheter <i class="fa-solid fa-cart-shopping"></i
                  ></a>
                </button>
                <h5>${prix} FCFA</h5>
              </div>
        `;
    })
    )
}

let jus = JSON.stringify(poudres)

localStorage.setItem('poudres',jus)

listJusFruits()