import React from "react";

import styles from "./CallBtn.module.scss";

const CallBtn = ({ id }) => {
  return (
    <a href="tel:+380503738465" className={styles.callBtn} id={id}>
      Rufen Sie uns an!
    </a>
  );
};

export default CallBtn;
