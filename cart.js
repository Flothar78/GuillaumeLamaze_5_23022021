

window.addEventListener('storage', () => {
    console.log(localStorage);
var newDiv = document.createElement("div");
var appendDiv = document.getElementById("appendDiv");
appendDiv.append(newDiv);
newDiv.innerHTML =
'<div class="row main align-items-center">' +
                    '<div class="col">' +
                     '<div class="choiceName"></div>' +
                   '</div>' +
           '<div class="col">' +
            '<div class="choicePrice"></div>' +
             ' </div>' +
              '<div class="col">' +
               '<div class="choiceQuantity"></div>' +
                '</div>' +
                 '</div>' +
               '</div>'});


for (let i = 0 ; i < localStorage.length ; i++) {
    
    let nameProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).name;
    let nameCart = document.querySelector('.choiceName');
    nameCart.innerHTML += nameProduct;  

    let priceProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).price/100 +'€';
    let priceCart = document.querySelector('.choicePrice');
    priceCart.innerHTML += priceProduct;

    let quantityProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
    let quantityCart = document.querySelector('.choiceQuantity');
    quantityCart.innerHTML += quantityProduct;

}


 







