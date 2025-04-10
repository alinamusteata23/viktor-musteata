import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import SocLinks from "../SocLinks/SocLinks";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
  return (
    <footer className={styles.footer} id="Contacts">
      <div className={`container ${styles.container}`}>
        <address className={styles.contentWrapp}>
          <Logo className={styles.logo} />
          <SocLinks className={styles.socLinks} />
          <a
            href="mailto:victortrofim9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            victortrofim9@gmail.com
          </a>

          <div className={styles.cardsWrapp}>
            <svg>
              <use href="/sprite.svg#icon-Visa"></use>
            </svg>
            <svg>
              <use href="/sprite.svg#icon-MasterCard"></use>
            </svg>
          </div>
        </address>
        <address className={styles.contentWrapp}>
          <h3 className={styles.footerTitle}>Kontakte</h3>
          <a
            href="mailto:victortrofim9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            victortrofim9@gmail.com
          </a>
          <p>9.00-19.00 Mo-Fr</p>
          <a
            href="tel:+491701251314"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            +491701251314
          </a>
        </address>
        <div className={styles.contentWrapp}>
          <h3 className={styles.footerTitle}>Menü</h3>
          <Navigation
            className={styles.footerNavigation}
            activeLink={styles.activeLink}
            hoverLink={styles.hoverLink}
          />
        </div>
      </div>

      <p className={styles.allRights}>
        © All rights reserved by &nbsp;
        <a href="https://www.webevery.dev/" target="_blank">
          Webevery.dev
        </a>
        &nbsp; 2024
      </p>
    </footer>
  );
};

export default Footer;
