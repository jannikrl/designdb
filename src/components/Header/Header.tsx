import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

interface HeaderProps {
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  const loginLink = !isAuthenticated ? <Link to="/login">Login</Link> : null;
  const logoutLink = isAuthenticated ? (
    <div>
      <Link to="/design/create">New design</Link>
      <Link to="/designer/create">New designer</Link>
      <Link to="/manufacturer/create">New manufacturer</Link>
      <Link to="/logout">Logout</Link>
    </div>
  ) : null;

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">DesignDb</Link>
      </h1>
      <nav>
        {loginLink}
        {logoutLink}
      </nav>
    </header>
  );
};

export default Header;
