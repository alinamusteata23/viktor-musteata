"use client";

import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";

const BurgerBtn = () => {
  const { mobileMenu, setMobileMenu } = useContext(SiteContext);

  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  if (isLaptop || isDesktop) {
    return <></>;
  } else {
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
  }
};

export default BurgerBtn;
