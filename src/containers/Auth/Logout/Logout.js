import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as authActions from "../../../store/auth/actions";
import { Redirect } from "react-router-dom";

const Logout = props => {
    const {logout} = props;
    
    useEffect(() => {
        logout();
    }, [logout])

    return (
      <Redirect to="/" />
    );
}

const mapDispatchToState = (dispatch) => {
  return {
    logout: () => dispatch(authActions.logout()),
  };
};

export default connect(null, mapDispatchToState)(Logout);
