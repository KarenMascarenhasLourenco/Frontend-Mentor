import React from "react";
import './FormDate.css';
const FormDate = () => {
  const year = new Date().getFullYear();
  function isA31DaysMonth(monthValue: number): boolean {
    if (monthValue === 1 || monthValue === 3 || monthValue === 5 || monthValue === 7 || monthValue === 8 || monthValue ===10 || monthValue ===12){
      return true;
    }else{
      return false;
    }
  }
  function verifyDay(dayValue:number, monthValue:number){
  const errorList = Array.from(document.querySelectorAll('.form-inputs span'));
  const errorSpan = errorList[0];
  if (errorSpan) {
    if((dayValue === 31 && !isA31DaysMonth(monthValue)) || 
       (dayValue > 29 && monthValue === 2) ||
       dayValue <1 || 
       dayValue > 31
       ){
      errorSpan.textContent='Must be a valid day'
    } else {
      errorSpan.textContent = '';
    }
  }
}

function verifyMonth(monthValue:number){
  const errorList = Array.from(document.querySelectorAll('.form-inputs span'));
  const errorSpan = errorList[1];
  if (errorSpan) {
    if((monthValue>12 || monthValue < 1)){
      errorSpan.textContent='Must be a valid month'
    } else {
      errorSpan.textContent = '';
    }
  }
}

function verifyYear(yearValue:number){
  const errorList = Array.from(document.querySelectorAll('.form-inputs span'));
  const errorSpan = errorList[2];
  if (errorSpan) {
    if((yearValue > year)){
      errorSpan.textContent='Must be a valid year'
    } else {
      errorSpan.textContent = '';
    }
  }
}


  function formValidation(){
    const dayInput =  document.querySelector('.day-input input') as HTMLInputElement;
    const dayValue = parseInt(dayInput?.value ?? '0');
    const monthInput = document.querySelector('.month-input input') as HTMLInputElement;
    const monthValue = parseInt(monthInput?.value ?? '0');
    const yearInput = document.querySelector('.year-input input') as HTMLInputElement;
    const yearValue = parseInt(yearInput?.value ?? '0');
    const errorList = Array.from(document.querySelectorAll('.form-inputs span'));

    verifyDay(dayValue,monthValue);
    verifyMonth(monthValue);
    verifyYear(yearValue);
    console.log('funcionando...')
  }

  return(
    <form noValidate>
      <div className="form-inputs">
        <div className="day-input">
          <label>Day<br/>
            <input/>
          </label>
          <span></span>  
        </div>
        <div className="month-input">
          <label>Month<br/>
            <input/>
          </label>
          <span></span>  
        </div>
        <div className="year-input">
          <label>Year<br/>
            <input/>
          </label>
          <span></span>        
        </div>
      </div>
      <br/>
      <div className="submit-div">
        <hr/>
        <button onClick={formValidation} title='submit' type="button"></button>
      </div>
    </form>
  );
}
export default FormDate;