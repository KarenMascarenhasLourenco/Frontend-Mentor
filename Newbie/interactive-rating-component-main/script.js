const ratingMenu = document.getElementById("rating-menu");
const thanksCard = document.getElementById("thanks-card");
const submit = document.getElementById("submit");
const ratingOptions = document.getElementById("rating-options");
const buttonStar = ratingOptions.querySelectorAll("button");
let rating = false;

buttonStar.forEach((button) => {
  button.addEventListener("click", () => {
    buttonStar.forEach((butonStar) => {
      butonStar.classList.remove("active", "button-chosen");
    });
    button.classList.add("active", "button-chosen");
    document.getElementById("feedback-rating").textContent = `You selected ${
      Array.prototype.indexOf.call(buttonStar, button) + 1
    } out of 5`;
    rating = true;
  });
});

submit.addEventListener("click", () => {
  if (rating === true) {
    ratingMenu.setAttribute("aria-hidden", "true");
    ratingMenu.classList.add("display-section");
    thanksCard.setAttribute("aria-hidden", "false");
    thanksCard.classList.remove("display-section");
  }
});
