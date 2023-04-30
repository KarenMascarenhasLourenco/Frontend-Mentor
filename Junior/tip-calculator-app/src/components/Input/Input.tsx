import React from 'react';
import './Input.css';

const Input = ({classBackground} : {classBackground: string }, {placeholder} : {placeholder: string}) => {
  return (
    <label htmlFor={classBackground}>
      <input placeholder={placeholder} className={classBackground}/>
    </label>
  )
}
export default Input