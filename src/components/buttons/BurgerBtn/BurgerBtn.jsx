"use client";

import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

const BurgerBtn = () => {
  const { mobileMenu, setMobileMenu, setmobileMenuContent } =
    useContext(SiteContext);

  const toggleMobileMenu = () => {
    if (mobileMenu) {
      setmobileMenuContent(false);

      setTimeout(() => {
        setMobileMenu(false);
      }, 500);
    } else {
      setMobileMenu(true);

      setTimeout(() => {
        setmobileMenuContent(true);
      }, 500);
    }
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
