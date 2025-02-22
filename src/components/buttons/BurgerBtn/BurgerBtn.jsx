"use client";

import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

const BurgerBtn = () => {
  const { mobileMenu, setMobileMenu } = useContext(SiteContext);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <button
      className={
        mobileMenu
          ? `${styles.burgerBtn} ${styles.btnIsClicked}`
          : styles.burgerBtn
      }
      onClick={toggleMobileMenu}
    >
      <div className={styles.middleLine}></div>
    </button>
  );
};

export default BurgerBtn;
