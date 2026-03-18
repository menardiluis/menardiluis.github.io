import React, { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão hamburguer */}
      <button
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </span>
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
          role="presentation"
        ></div>
      )}

      {/* Menu */}
      <nav
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        role="navigation"
      >
        <div className="mobile-menu-content">
          <a href="/" className="mobile-menu-link" onClick={closeMenu}>
            Home
          </a>
          <a href="/sobre" className="mobile-menu-link" onClick={closeMenu}>
            Sobre
          </a>
          <a href="/projetos" className="mobile-menu-link" onClick={closeMenu}>
            Projetos
          </a>
          <a href="/blog" className="mobile-menu-link" onClick={closeMenu}>
            Blog
          </a>
        </div>
      </nav>

      <style>{`
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 0.4rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          margin-right: -0.5rem;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          width: 1.5rem;
          height: 1.5rem;
          justify-content: center;
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background-color: var(--color-text-primary);
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }

        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }

        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 199;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-bg);
          z-index: 200;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          padding: var(--space-12) var(--space-8);
          padding-top: var(--space-20);
        }

        .mobile-menu-link {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text-primary);
          text-decoration: none;
          transition: color var(--transition-fast);
          padding: var(--space-4) 0;
        }

        .mobile-menu-link:hover {
          color: var(--color-accent);
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-menu-overlay {
            display: block;
          }

          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
