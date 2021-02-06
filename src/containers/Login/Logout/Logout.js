import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as authActions from "../../../store/auth/actions";
import { Redirect } from "react-router-dom";

const Logout = props => {
    const dispatch = useDispatch();

    const logout = useCallback(() => dispatch(authActions.logout()), [dispatch]);
    
    useEffect(() => {
        logout();
    }, [logout])

    return (
      <Redirect to="/" />
    );
}

export default Logout;
