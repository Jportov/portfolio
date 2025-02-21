import React, { useState } from 'react';
import logo from "../assets/images/JV.png";
import './HeaderStyles.scss';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className="header-content">
      <div className="logo"><img src={logo} alt="Logo" /></div>

        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      {/* Overlay para fechar o menu ao clicar fora */}
      {isMobileMenuOpen && <div className="overlay" onClick={closeMobileMenu}></div>}
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={closeMobileMenu}>Sobre</a></li>
        <li><a href="#experience" onClick={closeMobileMenu}>Experiência</a></li>
        <li><a href="#projects" onClick={closeMobileMenu}>Projetos</a></li>
        <li><a href="#contact" onClick={closeMobileMenu}>Contato</a></li>
        <li><button className="close-btn" onClick={closeMobileMenu}>Fechar</button></li>
      </ul>
    </nav>
  );
}

export default Header;
