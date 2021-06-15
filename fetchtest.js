fetch("http://localhost:3000/api/furniture/")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {});
