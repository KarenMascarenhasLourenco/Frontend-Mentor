import React, {useState} from "react";
import './FormDate.css';
const FormDate = () => {
  //get actual dates
  const presentYear = new Date().getFullYear(),
  presentMonth = (new Date().getMonth() + 1),
  presentDay = new Date().getDate()

  const [dayResult, setDayResult] = useState<number | string>("--");
  const [monthResult, setMonthResult] = useState<number | string>("--");
  const [yearResult, setYearResult] = useState<number | string>("--");
 
 let validDay:boolean=false,validMonth:boolean=false,validYear:boolean=false;
  
 //function section
  //controller functions
  function handleClick(){
    formValidation()
    if(formValidation()){         //only calculates the result if the form is valid
      calcResult()
    }
  }
  function formValidation(){
    //elements selectors
    const dayInput =  document.querySelector('.day-input input') as HTMLInputElement,
    yearInput = document.querySelector('.year-input input') as HTMLInputElement,
    monthInput = document.querySelector('.month-input input') as HTMLInputElement;
    //element's value
    const dayValue = parseInt(dayInput?.value ?? '0'),
    monthValue = parseInt(monthInput?.value ?? '0'),
    yearValue = parseInt(yearInput?.value ?? '0');
    //run verifiers
    verifyDay(dayValue,monthValue);
    verifyMonth(monthValue);
    verifyYear(yearValue);
    //emits response about validity of form
    if(validYear && validMonth && validDay){
      return true;
    }else{
      return false;
    }
  }
  //result function
  function calcResult() {
    //elements selectors
    const dayInput =  document.querySelector('.day-input input') as HTMLInputElement,
    yearInput = document.querySelector('.year-input input') as HTMLInputElement,
    monthInput = document.querySelector('.month-input input') as HTMLInputElement;
    //element's value
    const dayValue = parseInt(dayInput?.value ?? '0'),
    monthValue = parseInt(monthInput?.value ?? '0'),
    yearValue = parseInt(yearInput?.value ?? '0');
    //calcutations
    setYearResult( presentYear - yearValue);
    setMonthResult(Math.abs(presentMonth - monthValue));
    //calculates amount of days between months, Math.abs is used to obtain positive results
    if (dayValue > presentDay){
      if(isA31DaysMonth(presentMonth - 1)){
          setDayResult(Math.abs(presentDay + (31 - dayValue)))
      }else{
          setDayResult(Math.abs(presentDay + 30 - dayValue))
      }
    }else{
      setDayResult(Math.abs(dayValue - presentDay))
    }
    //adjusts year and month results based on completed years
    if(Number(monthResult) > 12){
      setMonthResult(Number(monthResult) - 12);
      setYearResult(Number(yearResult) + 1);
    }else if(monthValue > presentMonth){
      setMonthResult(12 - monthValue + presentMonth)
      setYearResult(Number(yearResult) - 1);
    }
    console.log(yearResult,monthResult,dayResult)
  }
  //verifiers
  function isA31DaysMonth(monthValue: number): boolean {  //verifies if we are on a 31 day month
    if (monthValue === 1 || monthValue === 3 || monthValue === 5 || monthValue === 7 || monthValue === 8 || monthValue ===10 || monthValue ===12){
      return true;
    }else{
      return false;
    }
  }
  function verifyDay(dayValue:number, monthValue:number){
    const dayError = document.querySelector('.day-input') as HTMLElement,
    errorList = Array.from(document.querySelectorAll('.form-inputs span')),
    errorSpan = errorList[0];
    //verifier of conditions
    if((dayValue === 31 && !isA31DaysMonth(monthValue)) || (dayValue > 29 && monthValue === 2) 
      || dayValue < 1 || dayValue > 31 || isNaN(dayValue) ){
      dayError?.classList.add('invalid')
      errorSpan.textContent='Must be a valid day'
      validDay = false;
    }else {
      dayError?.classList.remove('invalid')
      errorSpan.textContent = '';
      validDay = true;
    }
  }

  function verifyMonth(monthValue:number){
    const monthError = document.querySelector('.month-input') as HTMLElement,
    errorList = Array.from(document.querySelectorAll('.form-inputs span')),
    errorSpan = errorList[1];
    //verified if es a valid month
    if(monthValue>12 || monthValue < 1 || isNaN(monthValue)){
      monthError?.classList.add('invalid')
      errorSpan.textContent='Must be a valid month'
      validMonth=false;
    } else {
      monthError?.classList.remove('invalid')
      errorSpan.textContent = '';
      validMonth=true;
    }
  }

  function verifyYear(yearValue:number){
    const yearError = document.querySelector('.year-input') as HTMLElement,
    errorList = Array.from(document.querySelectorAll('.form-inputs span')),
    errorSpan = errorList[2];
    //varifiy if is a current or past year
    if(yearValue > presentYear || isNaN(yearValue)){
      yearError?.classList.add('invalid')
      errorSpan.textContent='Must be a valid year'
      validYear=false;
    }else {
      yearError?.classList.remove('invalid')
      errorSpan.textContent = '';
      validYear = true;
    }
  }

  return(
    <main>
      <form noValidate>
        <div className="form-inputs">
          <div className="day-input">
            <label>Day<br/>
              <input placeholder="DD"/>
            </label><br/>
            <span></span>  
          </div>
          <div className="month-input">
            <label>Month<br/>
              <input placeholder="MM"/>
            </label><br/>
            <span></span>  
          </div>
          <div className="year-input">
            <label>Year<br/>
              <input placeholder="YYYY"/>
            </label><br/>
            <span></span>        
          </div>
        </div>
        <br/>
        <div className="submit-div">
          <hr/>
          <button onClick={handleClick} title='submit' type="button"></button>
        </div>
      </form>
      <section>
        <h1><span>{yearResult}</span> years</h1>
        <h2><span>{monthResult}</span> months</h2>
        <h2><span>{dayResult}</span> days</h2>
      </section>
    </main>
  );
}
export default FormDate;