import React, { useState } from 'react';

import Grid from '../../components/Grid/Grid';
import ProductItem from '../../components/ProductItem/ProductItem';
import { checkValidity, updateObject } from '../../shared/util';

import './ProductEditor.css';

const ProductEditor = (props) => {
  const [controls, setControls] = useState({
    image: {
      inputType: 'file',
      elementConfig: {
        type: 'file',
        placeholder: 'Product Title',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },

    title: {
      inputType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Product Title',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    price: {
      inputType: 'input',
      elementConfig: {
        type: 'number',
        placeholder: 'Product Price',
      },
      value: '',
      validation: {
        required: true,
        isNumber: true,
      },
      valid: false,
      touched: false,
    },
    description: {
      inputType: 'textarea',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Description',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  });

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedControls = updateObject(controls, {
      [inputIdentifier]: updateObject(controls[inputIdentifier], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[inputIdentifier].validation
        ),
        touched: true,
      }),
    });

    setControls(updatedControls);
  };


  let controlElementsArray = [];

  for (let key in controls) {
    controlElementsArray.push({
      id: key,
      config: controls[key],
    });
  }

  return (
    <React.Fragment>
      <Grid isEdit={true}>
        <ProductItem
          isEdit={'add'}
          controls={controls}
          changed={inputChangedHandler}
          imageUrl={
            controls.image.value !== ''
              ? controls.image.value
              : '/NodeShopBlack.png'
          }
        ></ProductItem>
      </Grid>
      <div className="dummy-row-3"></div>
    </React.Fragment>
  );
};

export default ProductEditor;
