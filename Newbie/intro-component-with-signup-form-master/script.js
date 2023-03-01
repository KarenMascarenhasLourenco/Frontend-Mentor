const form = document.querySelector("#form-section");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const spanError = document.querySelectorAll(".span-error");
const iconError = document.querySelectorAll(".icon-error");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (firstName.value === "" || firstName.value.lenght < 3) {
    spanError[0].textContent = "First Name cannot be empty";
    iconError[0].classList.remove("icon-error");
  } else{
    spanError[0].textContent = "";
    iconError[0].classList.add("icon-error")
  }

  if (lastName.value === "" || lastName.value.lenght < 2) {
    spanError[1].textContent = "Last Name cannot be empty";
    iconError[1].classList.remove("icon-error");
  } else {
    spanError[1].textContent = "";
    iconError[1].classList.add("icon-error");
  }

  if (!isValidEmail(email.value)) {
    spanError[2].textContent = "Looks like this is not an email";
    iconError[2].classList.remove("icon-error");
  } else {
    spanError[2].textContent = "";
    iconError[2].classList.add("icon-error");
  }

  if (password.value === "" || password.value.lenght < 2) {
    spanError[3].textContent = "Password cannot be empty";
    iconError[3].classList.remove("icon-error");
  } else {
    spanError[3].textContent = "";
    iconError[3].classList.add("icon-error");
  }
});
