import React from 'react';
import {Logo} from '../Logo/Logo';
import {Button} from '../button/Button';
import {StyledHeader, SearchArea, StyledAddButton} from './StyledHeader.js';
import {connect} from 'react-redux';
import {openModalByType} from '../../redux/action';


const Header = ({handleOpenModal}) => {
  return (
    <StyledHeader>
      <Logo />
      <Button label="+ADD MOVIE" position={StyledAddButton} action={() => handleOpenModal('add', 'ADD MOVIE')} />

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
 * @param {event} event click on reset button event
 */
function resetInputs(event) {
  console.log('undoInputs...');
}

/**
 * @param {event} event click on submit button event
 */
function addMovie(event) {
  console.log('undoInputs...');
}

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: (type, title) => dispatch(openModalByType(type, title)),
  };
}

export default connect(null, mapDispatchToProps)(Header);
