"use client";

import React, { useContext } from "react";
import styles from "./MobileMenu.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import SocLinks from "@/components/SocLinks/SocLinks";
import { SiteContext } from "@/context/SiteContext";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu, mobileMenuContent, setmobileMenuContent } =
    useContext(SiteContext);

  const handleClick = () => {
    if (mobileMenu) {
      setmobileMenuContent(false);

      setTimeout(() => {
        setMobileMenu(false);
      }, 500);
    } else {
      return;
    }
  };

  return (
    <div className={mobileMenu ? `${styles.mobMenu}` : `${styles.mobMenuNone}`}>
      <Navigation
        className={
          mobileMenuContent ? `${styles.nav} ${styles.navVisible}` : styles.nav
        }
        onClick={handleClick}
      />

      <SocLinks
        className={
          mobileMenuContent
            ? `${styles.socLinks} ${styles.socLinksVisible}`
            : styles.socLinks
        }
      />
    </div>
  );
};

export default MobileMenu;
