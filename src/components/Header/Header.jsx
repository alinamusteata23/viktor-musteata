"use client";

import React, { useContext } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import { useWindowResize } from "@/hooks/windowResize";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
import SocLinks from "../SocLinks/SocLinks";

const Header = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo className={styles.logo} />

        {isTablet && <SocLinks className={styles.tabletSocLinks} />}

        {isMobile || isTablet ? (
          <BurgerBtn />
        ) : (
          <Navigation className={styles.navigation} />
        )}

        {(isMobile || isTablet) && <MobileMenu />}
      </div>

      {(isLaptop || isDesktop) && (
        <SocLinks className={`container ${styles.socLinks}`} />
      )}
    </header>
  );
};

export default Header;
