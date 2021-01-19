import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const loginLink = !props.isAuthenticated ? (
    <Link to="/auth">Login</Link>
  ) : null;
  const logoutLink = props.isAuthenticated ? (
    <Link to="/logout">Logout</Link>
  ) : null;

  return (
    <header className={"header"}>
      <h1 className={"logo"}><Link to="/">designdb</Link></h1>
      <nav>
        {loginLink}
        {logoutLink}
      </nav>
    </header>
  );
};

export default Header;
