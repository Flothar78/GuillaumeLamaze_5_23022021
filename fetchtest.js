const displayName = document.querySelector("#Name");
const displayPrice = document.getElementById("Price");
const displayImage = document.getElementById("Image");
const displayDescription = document.querySelector("#Description");

const promise01 = fetch("http://localhost:3000/api/furniture/");
promise01
  .then((getData) => {
    return getData.json();
  })
  .then((consoleData) => {
    console.log(consoleData[3].description);
    let txtName = consoleData[3].name;
    let txtPrice = consoleData[3].price;
    let txtImage = consoleData[3].imageUrl;
    let txtDescription = consoleData[3].description;

    displayName.innerHTML = txtName;
    displayPrice.innerHTML = txtPrice;
    displayImage.innerHTML = txtImage;
    displayDescription.innerHTML = txtDescription;
  });
