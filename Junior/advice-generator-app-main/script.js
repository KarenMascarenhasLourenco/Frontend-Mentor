var button = document.getElementById("new-advice");
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(function (response) { return response.json(); }) //converts the response to a json
        .then(function (data) {
        var advice = data.slip.advice;
        var adviceId = data.slip.id;
        document.getElementById("advice").textContent = " ".concat(advice, " ");
        document.querySelector("h1").textContent = "ADVICE #".concat(adviceId);
    })["catch"](function (error) {
        console.error(error);
    });
}
document.addEventListener("DOMContentLoaded", getAdvice); //for the first advice
button.addEventListener("click", getAdvice);
