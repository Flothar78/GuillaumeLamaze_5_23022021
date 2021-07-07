
var newTr = document.createElement("tr");
var appendTr = document.getElementById("appendTr");
appendTr.append(newTr);
newTr.innerHTML =
'<td class="choiceName"></td>' +
'<td class="choicePrice"></td>' + 
'<td class="choiceQuantity"></td>' +
'</tr>';

 


for (let i = 0 ; i < localStorage.length ; i++) {
    
    let nameProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).name;
    let nameCart = document.querySelector('.choiceName');
    nameCart.innerHTML = nameProduct;

    let priceProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).price/100 +'€';
    let priceCart = document.querySelector('.choicePrice');
    priceCart.innerHTML = priceProduct;

    let quantityProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
    let quantityCart = document.querySelector('.choiceQuantity');
    quantityCart.innerHTML = quantityProduct;
}








