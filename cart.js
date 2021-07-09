
let total = 0;



for (let i = 0 ; i < localStorage.length ; i++) {

   var newTr = document.createElement("tr");
   var appendTr = document.getElementById("appendTr");
   appendTr.append(newTr);
   newTr.innerHTML =
   '<td class="choiceName"></td>' +
   '<td class="choicePrice"></td>' + 
   '<td class="choiceQuantity"></td>' +
   '<td class="choiceCost"></td>' +
   '</tr>';    
    
    var nameProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).name;
    var nameCart = document.querySelectorAll('.choiceName')[i];
    nameCart.innerHTML += nameProduct;  

    var priceProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).price/100 ;
    var priceCart = document.querySelectorAll('.choicePrice')[i];
    priceCart.innerHTML += priceProduct;

    var quantityProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
    var quantityCart = document.querySelectorAll('.choiceQuantity')[i];
    quantityCart.innerHTML += quantityProduct;

    var costCart = document.querySelectorAll('.choiceCost')[i];

    costCart.innerHTML = priceCart.innerHTML * quantityCart.innerHTML;

    var totalCost = document.querySelector('#totalCost');

    var stringNumber = costCart.innerHTML;
    var value = parseInt(stringNumber);
    value = Number(stringNumber);
    total += value;
    
}   


    totalCost.innerHTML += total;



