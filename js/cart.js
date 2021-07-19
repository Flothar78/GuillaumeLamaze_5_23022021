let total = 0;

////// Fonction pour créer les lignes dans le tableau HTML du panier en fonction du contenu du Local Storage //////////////////////////////////////////////

function createRow() {
  var newTr = document.createElement("tr");
  var appendTr = document.getElementById("appendTr");
  appendTr.append(newTr);
  newTr.innerHTML =
    '<td class="choiceName"></td>' +
    '<td class="choicePrice"></td>' +
    '<td class="choiceQuantity"></td>' +
    '<td class="choiceCost"></td>' +
    "</tr>";
}

////// Fonction pour remplir les lignes du tableau HTML du panier en fonction du contenu du Local Storage ////////////////////////////////////

function Product(x, y, z, i) {
  var nameCart = document.querySelectorAll(".choiceName")[i];
  var priceCart = document.querySelectorAll(".choicePrice")[i];
  var quantityCart = document.querySelectorAll(".choiceQuantity")[i];
  var costCart = document.querySelectorAll(".choiceCost")[i];

  nameCart.innerHTML += JSON.parse(localStorage.getItem(localStorage.key(i)))[
    x
  ];
  priceCart.innerHTML +=
    JSON.parse(localStorage.getItem(localStorage.key(i)))[y] / 100;
  quantityCart.innerHTML += JSON.parse(
    localStorage.getItem(localStorage.key(i))
  )[z];
  costCart.innerHTML = priceCart.innerHTML * quantityCart.innerHTML;
}

////// Boucle FOR pour créer le nombre de lignes du panier selon le nombre d'articles ////////////////
for (let i = 0; i < localStorage.length; i++) {
  ////// Appel de la fonction de création des lignes ////////////////////////////
  createRow();

  ////// Appel de la fonction de remplissage des lignes /////////////////////////
  Product("name", "price", "quantity", i);

  ////// Produit du prix de chaque article par la quantité de chaque article /////////////////////////////
  var costCart = document.querySelectorAll(".choiceCost")[i];
  var stringNumber = costCart.innerHTML;
  var value = parseInt(stringNumber);

  ////// Somme des produits de chaque ligne pour calcul du montant total //////////////////////////////////
  total += value;
  var totalCost = document.querySelector("#totalCost");
}
totalCost.innerHTML += total;

document.getElementById("placeOrder").onclick = function (e) {
  e.preventDefault();
  sendOrder();
};
function sendOrder() {
  ////// Construction de l'objet contact ///////////////////////////////////////////////////////////
  const contacts = {
    firstName: document.querySelector("#inputFirstName").value,
    lastName: document.querySelector("#inputLastName").value,
    address: document.querySelector("#inputAddress").value,
    city: document.querySelector("#inputCity").value,
    email: document.querySelector("#inputEmail4").value,
  };
  ////// Construction de l'array du Panier /////////////////////////////////////////////////////////////
  let products = [];
  ////// Récupèration des Id Produits sous forme d'un array (1 Id = plusieurs articles) /////////////////////////////////////////////
  let keys = Object.keys(localStorage);
  ////// Envoi de ces Id Produits dans le nouveau array product (1 Id = 1 article) ////////////////////////////////////////////////////
  for (let key of keys) {
    for (let i = 0; i < JSON.parse(localStorage[key]).quantity; i++) {
      products.push(key);
    }
  }
  ////// Envoi des données contact et product à l'API ////////////////////////////////////////////////////////////////
  fetch("http://localhost:3000/api/furniture/order", {
    method: "POST",
    body: JSON.stringify({ contact: contacts, products: products }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    /////// Récuperation des données renvoyées par le serveur ////////////////////////////////////////////////////////////////////////////////
    .then((res) => {
      return res.json();
    })
    ////// Envoi cout total vers local storage ///////////////////////////////////////////////////////////////////
    .then(localStorage.setItem("totalCost", JSON.stringify(total)))
    ////// Envoi order Id vers local storage //////////////////////////////////////////////////////////////////////
    .then((json) =>
      localStorage.setItem("orderID", JSON.stringify(json.orderId))
    )
    ////// Ouverture de la page de confiramtion de commande ////////////////////////////////////////////////////////
    .then(window.open("confirmation.html"));
}
