const poudreList = document.getElementById('poudre-list');

const yaourtList = document.getElementById('yaourt-list');

const yaourts = [
    {
        "id":1,
        "title":"Yaourt",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourt.png"
    },
    {
        "id":2,
        "title":"Yaourt d'ananas",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDananas.png"
    },
    {
        "id":3,
        "title":"Yaourt de mangue",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDeMangue.png"
    },
    {
        "id":4,
        "title":"Yaourt de banane",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDebanane.png"
    },
    {
        "id":5,
        "title":"Yaourt de fraise",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDEfraise.png"
    },
    {
        "id":6,
        "title":"Yaourt de mangue",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDeMangue.png"
    },
    {
        "id":7,
        "title":"Yaourt de banane",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDebanane.png"
    },
    {
        "id":8,
        "title":"Yaourt de fraise",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDEfraise.png"
    },
    {
        "id":9,
        "title":"Yaourt de mangue",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDeMangue.png"
    },
    {
        "id":10,
        "title":"Yaourt d'ananas",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/yaourtDananas.png"
    }
];

const listJusFruits = () =>{
    return (yaourtList.innerHTML = yaourts.map((product)=> {
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
                  <a href="details/detailyaourt.html?id=${id}"
                    >Acheter <i class="fa-solid fa-cart-shopping"></i
                  ></a>
                </button>
                <h5>${prix} FCFA</h5>
              </div>
        `;
    })
    )
}

let jus = JSON.stringify(yaourts)

localStorage.setItem('yaourts',jus)

listJusFruits()