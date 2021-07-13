
let total = 0;


////// Création de lignes dans le tableau HTML en fonction du contenu du Local Storage //////////////////////////////////////////////

function createRow() {
var newTr = document.createElement("tr");
   var appendTr = document.getElementById("appendTr");
   appendTr.append(newTr);
   newTr.innerHTML =
   '<td class="choiceName"></td>' +
   '<td class="choicePrice"></td>' + 
   '<td class="choiceQuantity"></td>' +
   '<td class="choiceCost"></td>' +
   '</tr>';    
}



   for (let i = 0 ; i < localStorage.length ; i++) {
    
    createRow();
    

    ////// Remplissage des lignes du tableau HTML du panier en fonction du contenu du Local Storage ////////////////////////////////////
 
    var nameProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).name;
    var nameCart = document.querySelectorAll('.choiceName')[i];
    nameCart.innerHTML += nameProduct;  

    var priceProduct = JSON.parse(localStorage.getItem(localStorage.key(i))).price/100;
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
    total += value;
   }
    totalCost.innerHTML += total;


////// Envoi des données panier et formulaire vers API //////////////////////




async function fetchPost() {
  const response = await fetch('http://localhost:3000/api/furniture/order', {
   method: "POST",
     })
     if (!response.ok) {
    console.log('an error has occured');
  }
}

  fetchPost
();
 
     




  






