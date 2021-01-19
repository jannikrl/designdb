import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../../store/auth/actions";
import { withRouter } from "react-router-dom";

class Auth extends Component {
  loginHandler = () => {
    this.props.login();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button onClick={this.loginHandler}>Login</button>
      </div>
    );
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    login: () => dispatch(authActions.auth()),
  };
};

export default withRouter(connect(null, mapDispatchToState)(Auth));
