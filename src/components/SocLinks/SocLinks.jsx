import React from "react";
import { socLinks } from "@/data/socLinks";
import Link from "next/link";

const SocLinks = ({ className }) => {
  return (
    <address className={className}>
      {socLinks.map((el) => {
        return (
          <Link key={el.title} href={el.href}>
            <svg>
              <use href={el.icon}></use>
            </svg>
          </Link>
        );
      })}
    </address>
  );
};

export default SocLinks;
