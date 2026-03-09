'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const linkedInColor = !isMobile && !scrolled ? '#fff' : '#333';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-shrink' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img 
            src={scrolled ? "/img/logo/logo_h2.webp" : "/img/logo/logo_h.webp"} 
            alt="Logo Olivier Rojo" 
            className="logo-img"
          />
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link href="/" style={{ color: scrolled ? (pathname === '/' ? '#333' : '#666') : '#fff' }}>
            Directeur Projets
          </Link>
          <Link href="/vibecoding" style={{ color: scrolled ? (pathname === '/vibecoding' ? '#333' : '#666') : '#fff' }}>
            Vibe Coding
          </Link>
          <Link href="/oenologie" style={{ color: scrolled ? (pathname === '/oenologie' ? '#333' : '#666') : '#fff' }}>
            Oenologie
          </Link>
          <a 
            href="https://www.linkedin.com/search/results/all/?keywords=Olivier%20Rojo"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}
            className="navbar-linkedin"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: linkedInColor }}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
