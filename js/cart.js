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

////// Envoi des données panier et formulaire vers API //////////////////////
function sendOrder() {
  const contacts = {
    firstName: document.querySelector("#inputFirstName").value,
    lastName: document.querySelector("#inputLastName").value,
    address: document.querySelector("#inputAddress").value,
    address2: document.querySelector("#inputAddress2").value,
    city: document.querySelector("#inputCity").value,
    eMail: document.querySelector("#inputEmail4").value,
  };

  let products = Object.keys(localStorage);

  console.log(contacts);
  console.log(products);

  const sendCart = () => {
    contacts, products;
  };

  let orderContent = fetch("http://localhost:3000/api/furniture/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendCart),
  })
    .then((response) => response.text())
    .then((orderContent) => JSON.parse(orderContent));

  return orderContent;
}

sendOrder();
