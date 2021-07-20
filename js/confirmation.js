////// Récupèration depuis local storage, puis affichage du numéro de commande ////////////////////////////////////
let orderId = document.querySelector("#orderId");
orderId.innerHTML = localStorage.getItem("orderID");

////// Récupèration depuis local storage, puis affichage du coût total de la commande /////////////////////////////////
let prixTotal = document.querySelector("#prixTotal");
prixTotal.innerHTML = localStorage.getItem("totalCost");

/////// Suppression du panier ////////////////////////////////////////////////////////////////////////
localStorage.clear();
