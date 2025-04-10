"use client";

import { SiteContext } from "@/context/SiteContext";
import { navigation } from "@/data/navigation";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Navigation = ({ className, activeLink, onClick }) => {
  const { currentHash, setCurrentHash } = useContext(SiteContext);

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    updateHash(); // Set initial hash

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  const homeLinkClassName = (id) => {
    return currentHash === `#${id}` ? activeLink : "";
  };

  return (
    <nav className={`${className}`}>
      {navigation.map((el) => {
        return (
          <Link
            href={`#${el.id}`}
            key={el.title}
            onClick={(e) => {
              e.preventDefault(); // Prevent instant jump

              const targetElement = document.getElementById(el.id);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }

              setCurrentHash(`#${el.id}`);
              window.history.pushState(null, "", `#${el.id}`);

              if (onClick) {
                onClick();
              }
            }}
            className={homeLinkClassName(el.id)}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
