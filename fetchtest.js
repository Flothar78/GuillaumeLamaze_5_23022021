var url = new URL(window.location.href);
const id = url.searchParams.get("id");

const displayName = document.getElementById("Name");
const displayPrice = document.getElementById("Price");
const displayImage = document.getElementById("Image");
const displayDescription = document.getElementById("Description");

const promise01 = fetch("http://localhost:3000/api/furniture/" + id);
promise01
  .then((getData) => {
    return getData.json();
  })
  .then((consoleData) => {
    let txtName = consoleData.name;
    let txtPrice = consoleData.price;
    let txtImage = consoleData.imageUrl;
    let txtDescription = consoleData.description;
    displayName.innerHTML = txtName;
    displayPrice.innerHTML = txtPrice;
    displayDescription.innerHTML = txtDescription;
    displayImage.src = txtImage;
  });
