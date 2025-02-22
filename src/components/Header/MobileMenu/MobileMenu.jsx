import React from "react";
import styles from "./MobileMenu.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import SocLinks from "@/components/SocLinks/SocLinks";

const MobileMenu = ({ className }) => {
  return (
    <div className={`${styles.mobMenu} ${className}`}>
      <Navigation className={styles.nav} />
      <SocLinks className={styles.socLinks} />
    </div>
  );
};

export default MobileMenu;
