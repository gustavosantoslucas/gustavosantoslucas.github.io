import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#stacks', label: 'Stacks' },
  { href: '#projects', label: 'Projetos' },
  { href: '#experience', label: 'Experiência' },
  { href: '#courses', label: 'Cursos' },
  { href: '#contact', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo" onClick={e => handleLink(e, '#hero')}>
          <span className="navbar__logo-text">G</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
