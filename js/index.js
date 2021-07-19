/////// Appel de l'API  /////////////////////////////////////////////////////////////////////////
const api = fetch("http://localhost:3000/api/furniture/");

////// Récuperation du fichier JSON avec données de l'API ///////////////////////////////////////
api
  .then((getData) => {
    return getData.json();
  })
  ////// Création et injection de code HTML avec chaque clé API rattachée à sa balise ///////////
  .then((displayData) => {
    for (var i = 0; i < displayData.length; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "items";
      var section = document.getElementById("section");
      section.append(newDiv);
      newDiv.innerHTML =
        '<img class="card-img-top"' +
        "src=" +
        displayData[i].imageUrl +
        " />" +
        '<div class="card-body p-4">' +
        '<div class="text-center">' +
        "<div>" +
        '<h5 class="fw-bolder">' +
        displayData[i].name +
        "</h5>" +
        "</div>" +
        displayData[i].price / 100 +
        "€" +
        "</div>" +
        "</div>" +
        '<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">' +
        '<div class="text-center">' +
        '<button class="ToPageProducts" type="button">' +
        '<a href="products.html?id=' +
        displayData[i]._id +
        '"> Voir le produit</a>' +
        "</button>" +
        "</div>" +
        "</div>";
    }
  })
  .catch(() => {
    console.log("Une erreur est survenue");
  });
