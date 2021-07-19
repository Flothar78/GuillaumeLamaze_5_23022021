////// Récupèration depuis local storage du numéro de commande ////////////////////////////////////
let orderId = document.querySelector("#orderId");
orderId.innerHTML = localStorage.getItem("orderID");

////// Récupèration depuis local strage du coût totale de la commande /////////////////////////////////
let prixTotal = document.querySelector("#prixTotal");
prixTotal.innerHTML = localStorage.getItem("totalCost") + " euros.";

/////// Suppression du panier ////////////////////////////////////////////////////////////////////////
localStorage.clear();
