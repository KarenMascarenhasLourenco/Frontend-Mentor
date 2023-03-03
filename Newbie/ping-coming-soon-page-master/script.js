const form =document.querySelector("form"),
      nameError = document.querySelector(".nameError"),
      email =document.getElementById("email");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
 event.preventDefault();
 if (!isValidEmail(email.value) || email.value === "") {
   nameError.textContent = "Please provide a valid email address";
   nameError.style.display = "block";
   nameError.setAttribute("aria-hidden", "false");
   email.classList.add("invalid");
 } else {
  nameError.classList.toogle = "invalid";
  nameError.style.display = "none";
  form.submit();
 }
});

  