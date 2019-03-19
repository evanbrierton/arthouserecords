import React from 'react';
import { shape, string } from 'prop-types';

const Footer = ({ theme }) => (
  <footer style={{
    height: '5em',
    display: 'flex',
    padding: '0 1em',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    ...theme,
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

Footer.propTypes = { theme: shape({ backgroundColor: string, color: string }).isRequired };

export default Footer;
