"use client";

import { navigation } from "@/data/navigation";
import Link from "next/link";
import React, { useContext } from "react";

const Navigation = ({ className }) => {
  const handleClick = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`${className}`}>
      {navigation.map((el) => {
        return (
          <Link href={`#${el.id}`} key={el.title} onClick={handleClick}>
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
