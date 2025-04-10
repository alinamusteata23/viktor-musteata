"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuContent, setmobileMenuContent] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  return (
    <SiteContext.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        mobileMenuContent,
        setmobileMenuContent,
        currentHash,
        setCurrentHash,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
