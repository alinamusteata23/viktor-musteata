import React from "react";
import styles from "./MobileMenu.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import SocLinks from "@/components/SocLinks/SocLinks";
import { SiteContext } from "@/context/SiteContext";

const MobileMenu = ({ mobileMenu }) => {
  return (
    <div className={`${styles.mobMenu}`}>
      <Navigation
        className={
          { mobileMenu } ? styles.nav : `${styles.nav} ${styles.navClose}`
        }
      />
      <SocLinks className={styles.socLinks} />
    </div>
  );
};

export default MobileMenu;
