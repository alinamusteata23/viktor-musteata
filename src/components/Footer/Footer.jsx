import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import SocLinks from "../SocLinks/SocLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapp}>
          <Logo className={styles.logo} />
          <SocLinks className={styles.socLinks} />
          <a
            href="mailto:victortrofim9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mail}
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
        </div>
        <div className={styles.contentWrapp}></div>
        <div className={styles.contentWrapp}></div>
      </div>
    </footer>
  );
};

export default Footer;
