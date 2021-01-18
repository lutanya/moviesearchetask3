import React from 'react';
import {Logo} from '../Logo/Logo';
import {StyledHeader} from './StyledHeader.js';
import './header.css';
import PropTypes from 'prop-types';

export const Header = ({className, component}) => {
  return (
    <StyledHeader className={className}>
      <Logo />
      {component}
    </StyledHeader>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
