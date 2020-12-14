import React, { useState } from 'react';
import './movieEditModal.css';
import { Button } from '../button/Button';
import { StyledResetButton, StyledSubmitButton } from '../button/StyledButton.js';
import { MovieInfoInput } from './MovieInfoInput';
import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { StyledAddButton } from '../header/StyledHeader';
import { closeModal, openModalByType } from '../action';
import { connect } from 'react-redux';

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
 * @return {Element} returns button with modal window
 * @param {string} buttonClass class defining button styles
 * @param {string} buttonLabel label on the button
 * @param {string} title title of the modal window
 */

ModalEditMovie.propTypes = {
  title: PropTypes.string.isRequired,
};

function ModalEditMovie({ title, type, showProp, handleCloseModal }) {
  console.log(type);
  const [label, placeholder] = [
    ['TITLE',
      'RELEASE DATE',
      'MOVIE URL',
      'GENRE',
      'OVERVIEW',
      'RUNTIME'],
    ['Select Title',
      'Select Date',
      'Movie URL here',
      'Select genre',
      'Overview here',
      'Runtime here']];
  const isEditOrAdd = type === 'add' || type === 'edit';

  return (
    <>
      {isEditOrAdd ?
        <Modal show={showProp}>
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>x</span>
            {title}
            <form>
              {label.map((label, i) => (
                <MovieInfoInput key={i} label={label} placeholder={placeholder[i]} />
              ),
              )}
              <Button label="RESET" action={resetInputs}
                colored='true' empty='true' position={StyledResetButton} />
              <Button label="SUBMIT" action={addMovie}
                colored='true' position={StyledSubmitButton} />
            </form>
          </div>
        </Modal>
        :
        <Modal show={showProp}>
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>x</span>
            {title}
            <form>
              Are you sure you want to delete this movie?
              <Button label="CONFIRM" action={addMovie}
                colored='true' position={StyledSubmitButton} />
            </form>
          </div>
        </Modal>}
    </>
  )
}

const mapStateToProps = (state) => ({
  showProp: state.show,
  type: state.type,
  title: state.modalTitle,
});

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleCloseModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditMovie);
