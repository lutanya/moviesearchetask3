import React from 'react';
import {Logo} from '../Logo/Logo';
import './footer.css';
import PropTypes from 'prop-types';

/**
 * @return {Element} footer of the app
 */
export function Footer({className}) {
  return (
    <footer className={className}>
      <Logo />
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};


