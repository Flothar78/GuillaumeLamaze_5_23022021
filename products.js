var url = new URL(window.location.href);
const id = url.searchParams.get("id");

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

    for (var i = 0; i < txtVarnish.length; i++) {
      var varnishName = txtVarnish[i];
      var option = document.createElement("option");
      displayVarnish.appendChild(option);
      option.textContent = varnishName;
      option.value = varnishName;
    }

    /////////////// Mise en place du local storage au click du bouton Ajouter au panier ////////////////////////////////////////

    const sentCart = document.getElementById("cartItem");

    sentCart.addEventListener("click", () => {
      let addCart = JSON.parse(localStorage.getItem(apiFurniture._id));
      if (addCart) {
        localStorage.setItem(
            apiFurniture._id,
          JSON.stringify( {
            name: apiFurniture.name,
            price: apiFurniture.price,
            quantity: (addCart.quantity += 1),
          })
        );
        console.log("if");
      } else {
        localStorage.setItem(
           apiFurniture._id,
          JSON.stringify({
            name: apiFurniture.name,
            price: apiFurniture.price,
            quantity: 1,
          })
        );
        console.log("else");
      }
    });
  });
