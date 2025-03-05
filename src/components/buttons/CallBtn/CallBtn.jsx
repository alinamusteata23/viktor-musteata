import React from "react";

import styles from "./CallBtn.module.scss";

const CallBtn = ({ id }) => {
  return (
    <a href="tel:+491701251314" className={styles.callBtn} id={id}>
      Rufen Sie uns an!
    </a>
  );
};

export default CallBtn;
