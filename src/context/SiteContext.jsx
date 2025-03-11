"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuContent, setmobileMenuContent] = useState(false);

  return (
    <SiteContext.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        mobileMenuContent,
        setmobileMenuContent,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
