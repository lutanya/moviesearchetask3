import React from 'react';
import {Logo} from '../Logo/Logo';
import {Button} from '../Button/Button';
import {StyledHeader, SearchArea, StyledAddButton} from './StyledHeader.js';
import {connect} from 'react-redux';
import {openModalByType} from '../../redux/action';
import './header.css';
import PropTypes from 'prop-types';

const Header = ({className, handleOpenModal}) => {
  return (
    <StyledHeader className={className}>
      <Logo />
      <Button label="+ADD MOVIE" position={StyledAddButton} action={() => handleOpenModal('add')} />
      <p>FIND YOUR MOVIE</p>
      <SearchArea>
        <input placeholder='What do you want to watch?' />
        <Button label="SEARCH" action={searchMovie} colored />
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
};