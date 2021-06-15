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

var furniture = [
  "CrossTable",
  "Coffee Table",
  "Dining Table",
  "Bench",
  "Vintage Chair",
];
var text = "";
var i;
for (i = 0; i < furniture.length; i++) {
  text += funiture[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
