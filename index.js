let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body= document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let card = document.querySelector('.card');


openShopping.addEventListener('click', ()=> {
    body.classList.toggle('active')
})
closeShopping.addEventListener('click', ()=> {
    body.classList.remove('active')
    // card.style.display = "none"
})

let products = [
    {
        id: 1, 
        name: 'PRODUCT NAME 1', 
        image: 'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg',
        price: 120000
    },
    {
        id: 2, 
        name: 'PRODUCT NAME 2', 
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
        price: 130000
    },
    {
        id: 3, 
        name: 'PRODUCT NAME 3', 
        image: 'https://www.eatwell101.com/wp-content/uploads/2019/04/Blackened-Chicken-and-Avocado-Salad-recipe-1.jpg',
        price: 220000
    },
    {
        id: 4, 
        name: 'PRODUCT NAME 4', 
        image: 'https://sugarspunrun.com/wp-content/uploads/2021/09/Tomato-Soup-Recipe-1-of-1.jpg',
        price: 125000
    },
    {
        id: 5, 
        name: 'PRODUCT NAME 5', 
        image: 'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg',
        price: 150000
    },
    {
        id: 6, 
        name: 'PRODUCT NAME 6', 
        image: 'https://img.taste.com.au/lNnNoTvU/taste/2010/01/sushi-187034-1.jpg',
        price: 160000
    },
]

let listCards = [];

function initApp(){
    products.forEach((value, key)=> {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="${value.image}" height="200" width="200"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `
        list.appendChild(newDiv);
    })
}
initApp()

function addToCard(key){
    if(listCards[key] == null){
        listCards[key]= products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
              <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
              <div class="count">${value.quantity}</div>
              <button onclick="changeQuantity(${key}, ${value.quantity + 1})">-</button>
              </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
      delete listCards[key]
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}