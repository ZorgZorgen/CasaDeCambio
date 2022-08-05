const api = "https://api.exchangerate-api.com/v4/latest/USD";

var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;


// Cambio de moneda

fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

// Cambio de moneda
toCurrecy.addEventListener('change', (event) => {

    resultTo = `${event.target.value}`;

});
search.addEventListener('input', updateValue);
// funcion para actualizar valor

function updateValue(e) {
    searchValue = e.target.value;
}
// llamar getResults
convert.addEventListener("click", getResults);
// funcion getresults
module.exports = function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
// desplegar resultados

function displayResults(currency) {

    let fromRate = currency.rates[resultFrom];

    let toRate = currency.rates[resultTo];

    finalValue.innerHTML =
    ((toRate / fromRate) * searchValue).toFixed(2);



    finalAmount.style.display = "block";




}

// usuario da click en reset
function clearVal() {
    window.location.reload();

    document.getElementsByClassName("finalValue").innerHTML = "";

};
// incluye api