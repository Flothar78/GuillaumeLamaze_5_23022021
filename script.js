const api = fetch("http://localhost:3000/api/furniture/");

api
  .then((getData) => {
    return getData.json();
  })
  .then((displayData) => {
    for (var i = 0; i < displayData.length; i++) {
      console.log(displayData[i]);
      var newDiv = document.createElement("div");
      var section = document.getElementById("newDivJs");
      section.append(newDiv);
      newDiv.textContent = "test texte integration via javascript";
    }
  })
  .catch((error) => {
    console.log("Une erreur est survenue");
  });
