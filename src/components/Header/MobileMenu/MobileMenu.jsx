"use client";

import React, { useContext, useEffect } from "react";
import styles from "./MobileMenu.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import SocLinks from "@/components/SocLinks/SocLinks";
import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu, mobileMenuContent, setmobileMenuContent } =
    useContext(SiteContext);
  const { isMobile } = useWindowResize();

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

  useEffect(() => {
    if (window !== undefined && mobileMenu) {
      document.body.classList.add("stopBodyScroll");
    }

    return () => {
      document.body.classList.remove("stopBodyScroll");
    };
  }, [window, mobileMenu]);

  return (
    <div className={mobileMenu ? `${styles.mobMenu}` : `${styles.mobMenuNone}`}>
      <Navigation
        className={
          mobileMenuContent ? `${styles.nav} ${styles.navVisible}` : styles.nav
        }
        onClick={handleClick}
      />

      {isMobile && (
        <SocLinks
          className={
            mobileMenuContent
              ? `${styles.socLinks} ${styles.socLinksVisible}`
              : styles.socLinks
          }
        />
      )}
    </div>
  );
};

export default MobileMenu;
