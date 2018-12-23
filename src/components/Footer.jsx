import React from 'react';

const Footer = () => (
  <footer style={{
    height: '5em',
    display: 'flex',
    padding: '0 1em',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
  }}
  >
    <span>© Art House Records 2018</span>
    <span>
      Designed by&nbsp;
      <a
        className="credit"
        target="_blank"
        rel="noopener noreferrer"
        href="https://evanbrierton.github.io"
      >
        Evan Brierton
      </a>
    </span>
  </footer>
);

export default Footer;
