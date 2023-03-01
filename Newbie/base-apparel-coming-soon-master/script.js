const img = document.getElementById("photo");
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
const iconError = document.getElementById("icon-error");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInput.value === "") {
    emailErrorMessage.textContent = "Please enter an email address";
    emailErrorMessage.style.display = "block";
    iconError.classList.remove("show-icon");
  } else if (!isValidEmail(emailInput.value)) {
    emailErrorMessage.textContent = "Please provide a valid email";
    emailErrorMessage.style.display = "block";
    iconError.classList.remove("show-icon");
  } else {
    emailErrorMessage.style.display = "none";
    form.submit();
  }
});

function updateImgSrc() {
  if (window.innerWidth <= 375) {
    img.src = "./images/hero-mobile.jpg";
  }
}

window.addEventListener("resize", updateImgSrc);