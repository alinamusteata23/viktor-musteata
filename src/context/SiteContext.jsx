"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <SiteContext.Provider value={{ mobileMenu, setMobileMenu }}>
      {children}
    </SiteContext.Provider>
  );
};
