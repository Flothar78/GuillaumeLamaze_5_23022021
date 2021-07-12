
////// Récupération de la bonne ID depuis API via l'adresse URL de la page /////////////////

var url = new URL(window.location.href);
const id = url.searchParams.get("id");


////// Affichage HTML des données de l'API selon ID ///////////////////////////////

const displayName = document.getElementById("Name");
const displayPrice = document.getElementById("Price");
const displayImage = document.getElementById("Image");
const displayDescription = document.getElementById("Description");
const displayVarnish = document.getElementById("Varnish");

const promise01 = fetch("http://localhost:3000/api/furniture/" + id);
promise01
  .then((getData) => {
    return getData.json();
  })
  .then((apiFurniture) => {
    let txtName = apiFurniture.name;
    let txtPrice = apiFurniture.price / 100 + "€";
    let txtImage = apiFurniture.imageUrl;
    let txtDescription = apiFurniture.description;
    let txtVarnish = apiFurniture.varnish;

    displayName.innerHTML = txtName;
    displayPrice.innerHTML = txtPrice;
    displayDescription.innerHTML = txtDescription;
    displayImage.src = txtImage;
    displayVarnish.innerHTML = txtVarnish;


////// Boucle pour affichage des différents vernis en option ////////////////////////
    
    for (var i = 0; i < txtVarnish.length; i++) {
      var varnishName = txtVarnish[i];
      var option = document.createElement("option");
      displayVarnish.appendChild(option);
      option.textContent = varnishName;
      option.value = varnishName;
    }


////// Mise en place du local storage en fonction du click du bouton Ajouter au panier ////////////////////////////////////////

    const sentCart = document.getElementById("cartItem");

    sentCart.onclick = function () {
      let addCart = JSON.parse(localStorage.getItem(apiFurniture._id));
      if (addCart) {
        localStorage.setItem(
            apiFurniture._id,
          JSON.stringify({
            name: apiFurniture.name,
            price: apiFurniture.price,
            quantity: (addCart.quantity += 1),
          })
        );
      } else {
        localStorage.setItem(
           apiFurniture._id,
          JSON.stringify({
            name: apiFurniture.name,
            price: apiFurniture.price,
            quantity: 1,
          })
        );
      }
    };
  });
