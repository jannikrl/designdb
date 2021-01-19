import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../../components/UI/Input/Input";
import * as authActions from '../../../store/auth/actions';

class LoginForm extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-Mail",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.loginForm,
    };
    const updatedFormElement = {
      ...updatedLoginForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedLoginForm) {
      formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ loginForm: updatedLoginForm, formIsValid: formIsValid });
  };

  submitHandler = ( event ) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.loginForm) {
        formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
    }

    console.log(formData);
}

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }
    let form = (
      <form onSubmit={this.submitHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <button disabled={!this.state.formIsValid}>Login</button>
      </form>
    );
    return (
      <div>
        <h4>Login</h4>
        {form}
      </div>
    );
  }
}

const mapDispatchToState = (dispatch) => {
    return {
      login: () => dispatch(authActions.auth()),
    };
  };
  

export default connect(null, mapDispatchToState)(LoginForm);
