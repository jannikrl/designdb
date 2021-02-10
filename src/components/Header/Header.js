import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./Header.module.scss";

const Header = (props) => {
  const loginLink = !props.isAuthenticated ? (
    <Link to="/login">Login</Link>
  ) : null;
  const logoutLink = props.isAuthenticated ? (
    <div>
      <Link to="/design/create">New design</Link> 
      <Link to="/manufacturer/create">New manufacturer</Link> 
      <Link to="/logout">Logout</Link>
    </div>
  ) : null;

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">designdb</Link>
      </h1>
      <nav>
        {loginLink}
        {logoutLink}
      </nav>
    </header>
  );
};

export default Header;
