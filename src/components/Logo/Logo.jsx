import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ className }) => {
  return (
    <a href="#hero" className={`${styles.logo} ${className}`}>
      Viktor Musteata
    </a>
  );
};

export default Logo;
