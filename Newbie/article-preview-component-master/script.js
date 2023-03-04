const requiredButton = document.getElementById("required-button");
const requiredMessage = document.getElementById("required-message");

requiredButton.addEventListener("click", () => {
  requiredMessage.classList.toggle("hidden");
});
