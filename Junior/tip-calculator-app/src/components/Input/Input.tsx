import React from 'react';
import './Input.css';

const Input = ({classBackground} : {classBackground: string }) => {
  return (
    <label htmlFor={classBackground}>
      <input placeholder='0'className={classBackground}/>
    </label>
  )
}
export default Input