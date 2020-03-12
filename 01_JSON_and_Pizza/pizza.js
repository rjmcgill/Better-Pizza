

let requestURL = "https://rjmcgill.github.io/pizza/";
//New XHR object, grabs things from the server without refresh
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responceType = 'json';
request.send();

request.onload = function() {
  let plentyPizza = request.responce();
  console.log(plentyPizza);
}
