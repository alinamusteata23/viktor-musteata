import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo className={styles.logo} />

        <BurgerBtn />
      </div>
    </header>
  );
};

export default Header;
// fill="#ff8a00" style="fill: var(--color1, #ff8a00)"
