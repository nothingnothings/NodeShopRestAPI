import React from 'react';

import './Input.css';

const Input = (props) => {
  let inputElement = null;

  const inputClasses = [''];

  if (props.touched && !props.invalid) {
    inputClasses.push('valid');
  }

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('invalid');
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          style={{ resize: 'none' }}
          onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(' ')}
        />
      );
      break;
    case 'file':
      inputElement = (
        <input
          id="image"
          name="image"
          {...props.elementConfig}
          onChange={props.changed}
          className={inputClasses.join(' ')}
        />
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
        />
      );
  }

  return inputElement;
};

export default Input;
