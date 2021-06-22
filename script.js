const api = fetch("http://localhost:3000/api/furniture/");

api
  .then((getData) => {
    return getData.json();
  })
  .then((displayData) => {
    for (var i = 0; i < displayData.length; i++) {
      var json_data = JSON.stringify(displayData[i]);
      document.writeln(displayData);
      console.log(displayData);
    }
  })
  .catch((error) => {
    console.log("Une erreur est survenue");
  });
