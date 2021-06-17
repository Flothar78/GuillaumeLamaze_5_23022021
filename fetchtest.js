const displayName = document.getElementById("Name");
const displayPrice = document.getElementById("Price");
const displayImage = document.getElementById("Image");
const displayDescription = document.getElementById("Description");

const promise01 = fetch("http://localhost:3000/api/furniture/");
promise01
  .then((getData) => {
    return getData.json();
  })
  .then((consoleData) => {
    for (let i = 0; i < consoleData.length; i++) {
      console.log(consoleData[i]);
    }

    let txtName = consoleData[1].name;
    let txtPrice = consoleData[1].price;
    let txtImage = consoleData[1].imageUrl;
    let txtDescription = consoleData[1].description;

    displayName.innerHTML = txtName;
    displayPrice.innerHTML = txtPrice;
    displayDescription.innerHTML = txtDescription;
    displayImage.src = txtImage;
  });
