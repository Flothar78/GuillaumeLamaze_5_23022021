




for (let i = 0 ; i < localStorage.length ; i++) {

   var newTr = document.createElement("tr");
   var appendTr = document.getElementById("appendTr");
   appendTr.append(newTr);
   newTr.innerHTML =
   '<td class="choiceName"></td>' +
   '<td class="choicePrice"></td>' + 
   '<td class="choiceQuantity"></td>' +
   '</tr>';    
    
    let nameProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).name;
    let nameCart = document.querySelectorAll('.choiceName')[i];
    nameCart.innerHTML += nameProduct;  

    let priceProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).price/100 +'€';
    let priceCart = document.querySelectorAll('.choicePrice')[i];
    priceCart.innerHTML += priceProduct;

    let quantityProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
    let quantityCart = document.querySelectorAll('.choiceQuantity')[i];
    quantityCart.innerHTML += quantityProduct;

    
}



