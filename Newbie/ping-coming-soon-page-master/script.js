var submit = document.getElementById("submit");
var nameError = document.getElementById("emailError");
var form = document.getElementById("form")
submit.addEventListener("submit", validate);

var my_func = function (event) {
  event.preventDefault();
};
form.addEventListener("submit", my_func, true);

function validate(e) {
  e.preventDefault();
  const emailField = document.getElementById("email");
  let valid = true;

  if (!emailField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    emailField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
  }

  return valid;
}