const listJustF = document.getElementById('jus-fruit-list');

const jusFruits = [
    {
        "id":1,
        "title":"Jus d'Ananas",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusAnanas.png"
    },
    {
        "id":2,
        "title":"Jus de citron",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusCitron.png"
    },
    {
        "id":3,
        "title":"Jus de coco",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusCoco.png"
    },
    {
        "id":4,
        "title":"Jus de peche",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/JusPeche.png"
    },
    {
        "id":5,
        "title":"Jus d'Orange",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/JusOrange.png"
    },
    {
        "id":6,
        "title":"Jus de fraise",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusFraise.png"
    },
    {
        "id":7,
        "title":"Jus d'Ananas",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusAnanas.png"
    },
    {
        "id":8,
        "title":"Jus de peche",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/JusPeche.png"
    },
    {
        "id":9,
        "title":"Jus de fraise",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusFraise.png"
    },
    {
        "id":10,
        "title":"Jus de Fraise",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/jusdeFraise.png"
    }
];

const listJusFruits = () =>{
    return (listJustF.innerHTML = jusFruits.map((product)=> {
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
                  <a href="detailjusfruit.html?id=${id}"
                    >Acheter <i class="fa-solid fa-cart-shopping"></i
                  ></a>
                </button>
                <h5>${prix} FCFA</h5>
              </div>
        `;
    })
    )
}

let jus = JSON.stringify(jusFruits)

localStorage.setItem('jusfruits',jus)

listJusFruits()