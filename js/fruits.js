const listFruits = document.getElementById('fruit-list');

const fruits = [
    {
        "id":1,
        "title":"ghfvjggffgh",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/anacarde.jpg"
    },
    {
        "id":2,
        "title":"Banane",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/banane.png"
    },
    {
        "id":3,
        "title":"Citron",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/citron.jpg"
    },
    {
        "id":4,
        "title":"Pastheque",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/pastheque.png"
    },
    {
        "id":5,
        "title":"Pomme",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/Pomme.png"
    },
    {
        "id":6,
        "title":"Raisin",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/raisin.jpg"
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
        "title":"Champion",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/champion.jpg"
    },
    {
        "id":9,
        "title":"Banane",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/banane.png"
    },
    {
        "id":10,
        "title":"Pomme",
        "description":"Du bio de notre jardin",
        "prix":200,
        "quantiteStocker":7,
        "quantite":0,
        "image":"image/Pomme.png"
    }
];

const listJusFruits = () =>{
    return (listFruits.innerHTML = fruits.map((product)=> {
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
                  <a href="details/detailfruits.html?id=${id}"
                    >Acheter <i class="fa-solid fa-cart-shopping"></i
                  ></a>
                </button>
                <h5>${prix} FCFA</h5>
              </div>
        `;
    })
    )
}

let jus = JSON.stringify(fruits)

localStorage.setItem('fruits',jus)

listJusFruits()