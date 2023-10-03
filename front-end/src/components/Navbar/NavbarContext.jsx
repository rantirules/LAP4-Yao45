import React, { createContext, useContext, useState, useCallback } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [navbarPosition, setNavbarPosition] = useState('open');

  const updateNavbarPosition = useCallback((position) => {
    setNavbarPosition(position);
  }, []);

  return (
    <NavbarContext.Provider value={{ navbarPosition, updateNavbarPosition }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  return useContext(NavbarContext);
}
