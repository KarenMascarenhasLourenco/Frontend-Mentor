const form = document.querySelector("form"),
    formSection= document.querySelector('.form-section'),
    congratsSection = document.querySelector('section'),
  errorMessage = document.querySelectorAll("form p"),
  errorInput = document.querySelectorAll("form input"),
  informationCard = document.querySelectorAll(".card-section p"),
  cardName = document.getElementById("card-name"),
  cardNumber = document.getElementById("card-number"),
  expMonth = document.getElementById("exp-month"),
  expYear = document.getElementById("exp-year"),
  cvcCard = document.getElementById("cvc-card");
let validationPassed = false;
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if (cardName.value.trim() === '') {
        errorMessage[0].classList.remove('no-show')
        errorInput[0].classList.add("invalid-input");
        validationPassed = false;
    }else{
        errorMessage[0].classList.add('no-show')
        informationCard[1].textContent=cardName.value;
        validationPassed = true;
    }
    
    if (cardNumber.value.trim() === "") {
      errorMessage[1].classList.remove("no-show");
      errorInput[1].classList.add("invalid-input");
      validationPassed = false;
    }else {
      errorMessage[1].classList.add("no-show");
      informationCard[0].textContent = cardNumber.value;
      validationPassed = true;
    }
    if (/^[0-9]+$/.test(cardNumber) || cardNumber.value.length != 16) {
      errorMessage[1].classList.remove("no-show");
      errorInput[1].classList.add("invalid-input");
      validationPassed = false;
    } else {
      errorMessage[1].classList.add("no-show");
      informationCard[0].textContent = cardNumber.value;
      validationPassed = true;
    }

    if (expMonth.value.trim() === "") {
      errorMessage[2].classList.remove("no-show");
      errorInput[2].classList.add("invalid-input");
      validationPassed = false;
    } else {
      errorMessage[2].classList.add("no-show");
      informationCard[2].textContent = expMonth.value;
      validationPassed = true;
    }
    if (expYear.value === "") {
      errorMessage[2].classList.remove("no-show");
      errorInput[3].classList.add("invalid-input");
      validationPassed = false;
    } else {
      errorMessage[2].classList.add("no-show");
      informationCard[3].textContent = expYear.value;
      validationPassed = true;
    }

    if (cvcCard.value.trim() === "" || cvcCard.value.length != 3) {
      errorMessage[3].classList.remove("no-show");
      errorInput[4].classList.add("invalid-input");
      validationPassed = false;
    } else {
      errorMessage[3].classList.add("no-show");
      informationCard[4].textContent = cvcCard.value;
      validationPassed = true;
    }

    if (validationPassed){
        formSection.classList.add('no-show')
        formSection.setAttribute('aria-hidden', 'true');
        congratsSection.classList.remove('no-show');
        congratsSection.setAttribute('aria-hidden', 'false')
    }
})


