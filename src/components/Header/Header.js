import React from 'react';
import {Logo} from '../Logo/Logo';
import {StyledButton} from '../Button/StyledButton';
import {StyledHeader, SearchArea, StyledAddButton} from './StyledHeader.js';
import {connect} from 'react-redux';
import {openModalByType} from '../../redux/action';
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
