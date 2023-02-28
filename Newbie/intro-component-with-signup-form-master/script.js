let formValidator = {
  handleEvent: (event)=>{
    event.preventDefault();
  }
};

let form = document.getElementById("form-section");

form.addEventListener("submit",formValidator.handleEvent);