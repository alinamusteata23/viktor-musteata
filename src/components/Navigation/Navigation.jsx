"use client";

import { navigation } from "@/data/navigation";
import Link from "next/link";
import React from "react";

const Navigation = ({ className, onClick }) => {
  return (
    <nav className={`${className}`}>
      {navigation.map((el) => {
        return (
          <Link href={`#${el.id}`} key={el.title} onClick={onClick}>
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
