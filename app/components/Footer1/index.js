import React from 'react';
import Footer1Style from './Footer1Style';

const Footer = () => (
  <Footer1Style id="footer">
    <div className="container py-4">
      <div className="copyright">
        &copy; Copyright{' '}
        <strong>
          <span>VPBank</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        Designed by{' '}
        <a href="#!" target="_blank" rel="noopener noreferrer">
          VPBank-APL
        </a>
      </div>
    </div>
  </Footer1Style>
);

export default Footer;
