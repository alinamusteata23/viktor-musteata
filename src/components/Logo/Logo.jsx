"use client";

import React, { useContext } from "react";
import styles from "./Logo.module.scss";
import { SiteContext } from "@/context/SiteContext";

const Logo = ({ className }) => {
  const { setCurrentHash } = useContext(SiteContext);

  return (
    <a
      href="/"
      className={`${styles.logo} ${className}`}
      onClick={() => {
        setCurrentHash("");
      }}
    >
      Viktor Musteata
    </a>
  );
};

export default Logo;
