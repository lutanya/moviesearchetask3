import React from 'react';
import {Logo} from '../Logo/Logo';
import {StyledButton} from '../Button/StyledButton';
import {StyledHeader, SearchArea, StyledAddButton} from './StyledHeader.js';
import {connect} from 'react-redux';
import {openModalByType} from '../../redux/action';
import './header.css';
import PropTypes from 'prop-types';

const Header = ({className, handleOpenModal}) => {
  return (
    <StyledHeader className={className}>
      <Logo />
      <StyledButton position={StyledAddButton} onClick={() => handleOpenModal('add')} >
        +ADD MOVIE
      </StyledButton>
      <p>FIND YOUR MOVIE</p>
      <SearchArea>
        <input placeholder='What do you want to watch?' />
        <StyledButton onClick={() => searchMovie()} colored >
          SEARCH
        </StyledButton>
      </SearchArea>
    </StyledHeader>
  );
};

/**
 * @param {event} event search movie event
 */
function searchMovie(event) {
  console.log('searching...');
}

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: (type) => dispatch(openModalByType(type)),
  };
}

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  className: PropTypes.string,
  handleOpenModal: PropTypes.func.isRequired,
};
