"use client";

import React, { useContext } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import { useWindowResize } from "@/hooks/windowResize";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
import { SiteContext } from "@/context/SiteContext";
import SocLinks from "../SocLinks/SocLinks";

const Header = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  // const { mobileMenu } = useContext(SiteContext);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo className={styles.logo} />
        {isMobile || isTablet ? (
          <BurgerBtn />
        ) : (
          <Navigation className={styles.navigation} />
        )}
        {/* {mobileMenu && <MobileMenu />} */}

        {(isMobile || isTablet) && <MobileMenu />}
      </div>

      {(isLaptop || isDesktop) && (
        <SocLinks className={`container ${styles.socLinks}`} />
      )}
    </header>
  );
};

export default Header;
// fill="#ff8a00" style="fill: var(--color1, #ff8a00)"
