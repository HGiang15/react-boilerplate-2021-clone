import React, { useState, useEffect } from 'react';
import BackToTopStyle from './BackToTopStyle';

const BackToTop = ({ onSetActiveItem }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    onSetActiveItem('home');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <BackToTopStyle
      href="#"
      onClick={scrollToTop}
      isVisible={isVisible}
      aria-label="Back to Top"
    >
      <i className="fas fa-chevron-up icon-back" />
    </BackToTopStyle>
  );
};

export default BackToTop;
