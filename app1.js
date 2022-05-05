const products = document.querySelector('.market');

function createCard([img,product,category,price,rating,description,]){
    let code = 
    `
    <div class="card">
        <img src="${img}" alt="${product}">
            <div class="cardText">
                <p class="categoryText">${category}</p>
                <h2 class="priceText">${price}</h2>
                <h5>${rating}</h5>
                <h5 class="descriptionText">${description}</h5>
            </div>
    </div>
   
 `;
 products.innerHTML += code;

}

let item1= ['./assets/Throg vert.jpg',
'throg vert',
'Throg',
'⭐⭐⭐⭐⭐',
'Throg brings your team all the power of Thor the god of thunder in a pint sized package.'
]
let item2= ['./assets/Throg vert.jpg',
'throg vert',
'Throg',
'⭐⭐⭐⭐⭐',
'Throg brings your team all the power of Thor the god of thunder in a pint sized package.'
]
let item3= ['./assets/Throg vert.jpg',
'throg vert',
'Throg',
'⭐⭐⭐⭐⭐',
'Throg brings your team all the power of Thor the god of thunder in a pint sized package.'
]
let item4= ['./assets/Throg vert.jpg',
'throg vert',
'Throg',
'⭐⭐⭐⭐⭐',
'Throg brings your team all the power of Thor the god of thunder in a pint sized package.'
]

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);