import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../../../store/auth/actions";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    logout: () => dispatch(authActions.logout()),
  };
};

export default connect(null, mapDispatchToState)(Logout);
