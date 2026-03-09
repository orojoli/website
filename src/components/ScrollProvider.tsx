'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

const ScrollContext = createContext(false);

export function useScroll() {
  return useContext(ScrollContext);
}

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      document.body.classList.add('page-scrolled');
    } else {
      document.body.classList.remove('page-scrolled');
    }
  }, [scrolled]);

  return (
    <ScrollContext.Provider value={scrolled}>
      {children}
    </ScrollContext.Provider>
  );
}
