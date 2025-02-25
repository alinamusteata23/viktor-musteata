import { navigation } from "@/data/navigation";
import Link from "next/link";
import React from "react";

const Navigation = ({ className }) => {
  return (
    <nav className={`${className}`}>
      {navigation.map((el) => {
        return (
          <Link href={`#${el.title}`} key={el.title}>
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
