
console.log(localStorage.getItem('name'));

let nameProduct = JSON.parse(localStorage.getItem('name'));
let nameCart = document.querySelector('.choiceName');
nameCart.innerHTML = nameProduct;

let priceProduct = JSON.parse(localStorage.getItem('price'));
let priceCart = document.querySelector('.choicePrice');
priceCart.innerHTML = priceProduct;
