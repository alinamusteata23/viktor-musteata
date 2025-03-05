import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ className }) => {
  return (
    <a href="tel:+491701251314" className={`${styles.logo} ${className}`}>
      Viktor Musteata
    </a>
  );
};

export default Logo;
