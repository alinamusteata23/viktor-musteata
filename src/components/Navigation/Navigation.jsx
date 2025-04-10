"use client";

import { SiteContext } from "@/context/SiteContext";
import { navigation } from "@/data/navigation";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Navigation = ({ className, activeLink, hoverLink, onClick }) => {
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

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const footerSection = document.querySelector("footer");

    const trigeredSections = [...sections, footerSection];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Triggers when section is in the middle
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentHash(`#${entry.target.id}`);
          window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    }, observerOptions);

    trigeredSections.forEach((section) => observer.observe(section));

    return () =>
      trigeredSections.forEach((section) => observer.unobserve(section));
  }, [setCurrentHash]);

  const homeLinkClassName = (path) =>
    currentHash === `#${path}` ? activeLink : "";

  // const homeLinkClassName = (id) => {
  //   return currentHash === `#${id}` ? activeLink : "";
  // };

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

              document
                .getElementById(el.id)
                ?.scrollIntoView({ behavior: "smooth" });

              if (onClick) {
                onClick();
              }
            }}
            className={homeLinkClassName(el.id)}
            onMouseOver={(e) => {
              e.target.classList.add(`${hoverLink}`);
            }}
            onMouseOut={(e) => {
              e.target.classList.remove(`${hoverLink}`);
            }}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
