import React from "react";
import { socLinks } from "@/data/socLinks";
import Link from "next/link";
import styles from "./SocLinks.module.scss";

const SocLinks = ({ className }) => {
  return (
    <address className={className}>
      {socLinks.map((el) => {
        return (
          <Link
            key={el.title}
            href={el.href}
            target="_blank"
            className={styles.socLink}
            aria-label={el.title}
          >
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
