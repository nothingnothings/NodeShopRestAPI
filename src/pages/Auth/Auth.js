import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as authActionTypes from '../../store/actions/auth';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { checkValidity, disclaimerBox, updateObject } from '../../shared/util';
import Spinner from '../../components/UI/Spinner/Spinner';
import Cart from '../../components/Cart/Cart';
import Wrapper from '../../components/Wrapper/Wrapper';
import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import Grid from '../../components/Grid/Grid';
import NoProduct from '../../components/Cart/NoProduct/NoProduct';

import './Auth.css';

const Auth = (props) => {
  const [isSignup, setIsSignup] = useState(false);

  const [controls, setControls] = useState({
    email: {
      inputType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'exemplo@exemplo',
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },

    password: {
      inputType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'exemplo',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    confirm: {
      inputType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'exemplo',
      },
      value: '',
      validation: {
        required: true,
        isEqualToPassword: true,
      },
      valid: false,
      touched: false,
      isNeeded: false,
    },
  });

  const authSwitchHandler = () => {
    setIsSignup(!isSignup);
    const updatedControls = updateObject(controls, {
      confirm: updateObject(controls.confirm, {
        isNeeded: !controls.confirm.isNeeded,
        valid: false,
      }),
    });

    setControls(updatedControls);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedControls = updateObject(controls, {
      [inputIdentifier]: updateObject(controls[inputIdentifier], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[inputIdentifier].validation,
          controls.password.value
        ),
        touched: true,
      }),
    });

    setControls(updatedControls);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const email = controls.email.value;

    const password = controls.password.value;

    const confirmPassword = controls.confirm.value;

    if (isSignup) {

      return disclaimerBox();
    }

    props.onAuthAttempt(email, password, confirmPassword, isSignup);
  };

  let errorMessage = false;

  if (props.errorMessage) {
    errorMessage = props.errorMessage;
  }

  let controlElementsArray = [];

  for (let key in controls) {
    controlElementsArray.push({
      id: key,
      config: controls[key],
    });
  }

  if (!isSignup) {
    controlElementsArray = controlElementsArray.filter((control) => {
      return control.id !== 'confirm';
    });
  }

  let form = !props.loading ? (
    <React.Fragment>
      <Cart>
        <Wrapper>
          <CartItemList>
            <NoProduct
              productStyle={{ backgroundColor: 'var(--lightest-green)' }}
            >
              <li className="no-product cart-item">
                <div className="user-message user-message--error">
                  {errorMessage}
                </div>

                <form onSubmit={formSubmitHandler} className="login-form">
                  {controlElementsArray.map((controlElement) => {
                    return (
                      <div className="control" key={controlElement.id}>
                        <label htmlFor={controlElement.id}>
                          {controlElement.id.charAt(0).toUpperCase() +
                            controlElement.id.slice(1)}{' '}
                          {controlElement.id === 'confirm' ? 'Password' : ''}
                        </label>
                        <Input
                          changed={(event) => {
                            inputChangedHandler(event, controlElement.id);
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
                  <div className="switch-link">
                    {!isSignup ? (
                      <p>
                        No Account? &nbsp;
                        <Button
                          buttonClass="command"
                          clicked={authSwitchHandler}
                          buttonType="button"
                          isEnabled={true}
                        >
                          Join NodeShop
                        </Button>
                      </p>
                    ) : (
                      <p>
                        Already have an account? &nbsp;
                        <Button
                          buttonClass="command"
                          clicked={authSwitchHandler}
                          buttonType="button"
                          isEnabled={true}
                        >
                          Login
                        </Button>
                      </p>
                    )}
                  </div>

                  <Button
                    buttonType="submit"
                    buttonClass="button"
                    buttonId="button"
                    isEnabled={
                      controls.email.valid &&
                      controls.password.valid &&
                      (controls.confirm.valid ||
                        controls.confirm.isNeeded === false)
                    }
                  >
                    {!isSignup ? 'Login' : 'Sign Up'}
                  </Button>
                </form>
              </li>
            </NoProduct>
          </CartItemList>
        </Wrapper>
      </Cart>
    </React.Fragment>
  ) : (
    <Grid>
      <Spinner></Spinner>
    </Grid>
  );

  return form;
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthAttempt: (email, password, isSignup) => {
      dispatch(authActionTypes.authAttempt(email, password, isSignup));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
