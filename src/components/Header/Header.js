import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const loginLink = !props.isAuthenticated ? <Link to="/auth">Login</Link> : null;
  const logoutLink = props.isAuthenticated ? <Link to="/logout">Logout</Link> : null;

  return (
    <header>
      <h1>designdb</h1>
      {loginLink}
      {logoutLink}
    </header>
  );
};

export default Header;
