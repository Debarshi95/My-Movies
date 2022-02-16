import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>
        Made with
        <span>
          <i className="fa fa-heart" style={{ color: 'red', padding: '0 4px' }} />
        </span>
        by Debarshi
      </p>
    </div>
  );
}

export default Footer;
