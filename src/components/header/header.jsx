import React from "react";
import styles from "./header.module.css";

const Header = props => (
  <header className={styles.header}>
    <h1>
      <img src='images/logo.png' alt='logo' />
      <span>Goods Maker</span>
    </h1>
  </header>
);

export default Header;
