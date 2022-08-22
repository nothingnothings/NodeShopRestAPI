import React from 'react';
import { NavLink } from 'react-router-dom';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { disclaimerBox } from '../../../shared/util';

import './ProductBox.css';

const ProductBox = (props) => {
  let firstButton = (
    <NavLink className="button" to={`/shop/${props.productId}`}>
      Details
    </NavLink>
  );

  let secondButton = (
    <Button
      clicked={() => {
        props.onAddToCart(props.productId);
      }}
      buttonClass="button"
      isEnabled={true}
      buttonType="button"
      buttonId="cart-button"
    >
      Add To Cart
    </Button>
  );

  if (!props.token) {
    secondButton = (
      <NavLink className="button" to="/auth">
        Add to Cart
      </NavLink>
    );
  }

  if (props.isAdmin && props.token) {
    firstButton = (
      <Button
        clicked={() => {
          disclaimerBox();
        }}
        buttonClass="admin-button"
        isEnabled={true}
        buttonType="button"
        buttonId="cart-button"
      >
        Edit
      </Button>
    );

    secondButton = (
      <Button
        clicked={() => {
          disclaimerBox();
        }}
        buttonClass="admin-button"
        isEnabled={true}
        buttonType="button"
        buttonId="cart-button"
      >
        Delete
      </Button>
    );
  }

  let productBox = (
    <div className="product__box">
      <header className="product__header">
        <h1 className="product__title">{props.title}</h1>
      </header>
      <div className="product__content">
        <h2 className="product__price">
          <sup>US$</sup> {props.price}
        </h2>
        <p className="product__description">
          <strong>Description:</strong> {props.description}
        </p>
        <div className="product__actions">
          {firstButton}

          {secondButton}
        </div>
      </div>
    </div>
  );

  if (props.isEdit === 'add') {
    let controlElementsArray = [];

    for (let key in props.controls) {
      controlElementsArray.push({
        id: key,
        config: props.controls[key],
      });
    }

    productBox = (
      <div className="product__box">
        <form
          className="product-form"
          onSubmit={null}
          encType="multipart/form-data"
        >
          {controlElementsArray.map((controlElement) => {
            return (
              <div className="control" key={controlElement.id}>
                <label htmlFor={controlElement.id}>
                  {controlElement.id.charAt(0).toUpperCase() +
                    controlElement.id.slice(1)}
                </label>
                <Input
                  changed={(event) => {
                    props.changed(event, controlElement.id);
                  }}
                  inputKey={controlElement.id}
                  elementId={controlElement.id}
                  touched={controlElement.config.touched}
                  invalid={!controlElement.config.valid}
                  shouldValidate={controlElement.config.validation}
                  elementType={controlElement.config.inputType}
                  value={controlElement.value}
                  elementConfig={controlElement.config.elementConfig}
                />
              </div>
            );
          })}
          <div className="button-wrapper">
            <Button
              buttonClass="product-manage-button"
              buttonType="button"
              isEnabled={
                props.controls.image.valid &&
                props.controls.title.valid &&
                props.controls.price.valid &&
                props.controls.description.valid
              }
              clicked={() => {
                disclaimerBox();
              }}
            >
              {props.isEdit === 'add' ? 'Add Product' : 'Edit Product'}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return productBox;
};

export default ProductBox;
