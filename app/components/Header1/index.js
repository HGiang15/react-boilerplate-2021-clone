import React, { useState, useEffect } from 'react';
import logo from 'images/home/logo.png';
import { ROUTER_HOME } from 'utils/constants';
import Header1Style from './Header1Style';
import BackToTop from '../BackToTop';

const Header1 = () => {
  // state mobile menu open, state scroll, active menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // hide menu onClick item mobile
  const handleMenuClick = item => {
    setActiveItem(item);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // event listener component mount and unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header1Style
      id="header"
      className={`fixed-top ${
        isScrolled ? 'header-scrolled' : 'header-transparent'
      }`}
    >
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <h1>
            <a href={ROUTER_HOME}>
              <img src={logo} alt="VPBank1" className="img-fluid" />
            </a>
          </h1>
        </div>

        <nav
          className={`nav-menu ${
            isMobileMenuOpen ? 'mobile-active' : 'd-none d-lg-block'
          }`}
        >
          <ul className="nav__list">
            {['home', 'android', 'ios', 'gallery', 'faq'].map(item => (
              <li
                className={`nav__item ${activeItem === item ? 'active' : ''}`}
                key={item}
              >
                <a
                  className="nav__link"
                  href={`#${item}`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`mobile-nav-toggle ${isMobileMenuOpen ? 'menu-open' : ''}`}
          onClick={handleToggleMobileMenu}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleToggleMobileMenu();
            }
          }}
          role="button"
          tabIndex="0"
        >
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {isMobileMenuOpen && (
          <div
            className="overlay"
            onClick={handleToggleMobileMenu}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleToggleMobileMenu();
              }
            }}
            role="button"
            tabIndex="0"
          />
        )}
      </div>

      <BackToTop onSetActiveItem={handleMenuClick} />
    </Header1Style>
  );
};

export default Header1;
