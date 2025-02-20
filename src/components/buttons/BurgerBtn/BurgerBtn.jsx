import React from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = () => {
  return (
    <button className={styles.burgerBtn}>
      <div className={styles.middleLine}></div>
    </button>
  );
};

export default BurgerBtn;
