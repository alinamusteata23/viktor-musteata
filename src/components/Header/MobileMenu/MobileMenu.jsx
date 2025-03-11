"use client";

import React, { useContext } from "react";
import styles from "./MobileMenu.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import SocLinks from "@/components/SocLinks/SocLinks";
import { SiteContext } from "@/context/SiteContext";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu } = useContext(SiteContext);

  const handleClick = () => {
    setMobileMenu(false);
  };

  return (
    <div className={mobileMenu ? `${styles.mobMenu}` : `${styles.mobMenuNone}`}>
      <Navigation
        className={
          mobileMenu ? `${styles.nav} ${styles.navVisible}` : styles.nav
        }
        onClick={handleClick}
      />
      {/* <SocLinks className={styles.socLinks} /> */}

      <SocLinks
        className={
          mobileMenu
            ? `${styles.socLinks} ${styles.socLinksVisible}`
            : styles.socLinks
        }
        onClick={handleClick}
      />
    </div>
  );
};

export default MobileMenu;
