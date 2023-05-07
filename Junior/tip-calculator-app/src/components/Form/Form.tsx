import React from 'react';
import './Form.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = () => {
  return(
  <form>
    <div className='infoForm'>
      <fieldset>
        <h2>Bill</h2>
        <Input classBackground='moneySpend'/>
      </fieldset>
      <fieldset className='selectTip'>
        <h2>Select Tip %</h2>
        <Button content='5%'/>
        <Button content='10%'/>
        <Button content='15%'/>
        <Button content='25%'/>
        <Button content='50%'/>
      </fieldset>
      <fieldset>
        <h2>Number of People</h2>
      </fieldset>
    </div>
    <div className='previewForm'>
      <h2>Tip Amount</h2>
      <h2>Total</h2>
      <Button content='RESET'/>
    </div>
    
  </form>)
}

export default Form;