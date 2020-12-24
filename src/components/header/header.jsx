import React from "react";
import styles from "./header.module.css";

const Header = ({firebaseAuth}) => {
  const onLogOut = () => {
    firebaseAuth.logout();
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {/* <img className={styles.logo} src='/images/logo.png' alt='logo' /> */}
        <span>Goods Maker</span>
      </h1>
      <button className={styles.logout} onClick={onLogOut}>
        Log out
      </button>
    </header>
  );
};

export default Header;
