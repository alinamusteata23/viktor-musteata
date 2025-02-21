"use client";

import React, { useState } from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = () => {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);

  const burgerButnToggle = () => {
    setBurgerIsClicked(!burgerIsClicked);
  };

  return (
    <button
      className={
        burgerIsClicked
          ? `${styles.burgerBtn} ${styles.btnIsClicked}`
          : styles.burgerBtn
      }
      onClick={burgerButnToggle}
    >
      <div className={styles.middleLine}></div>
    </button>
  );
};

export default BurgerBtn;
