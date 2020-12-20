import React from 'react';
import './MovieEditModal.css';
import { Button } from '../Button/Button';
import { StyledResetButton, StyledSubmitButton } from '../Button/StyledButton.js';
import Input from '../Input/Input';
import { Modal } from '../Modal/Modal';
import { closeModal } from '../../redux/action';
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

function ModalEditMovie({ title, type, show, handleCloseModal, movie }) {
  const [placeholder] = [
    ['Select Title',
      'Select Date',
      'Movie URL here',
      'Select genre',
      'Overview here',
      'Runtime here'],
  ];
  return (
    <>     
        <Modal show={show}>
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>x</span>
            {title}
            <form>
              {Object.keys(movie).map((key, i) => (
                <Input label={key} placeholder={placeholder[i]} />
              ),
              )}
              <Button label="RESET" action={resetInputs}
                empty='true' position={StyledResetButton} />
              <Button label="SUBMIT" action={addMovie}
                colored='true' position={StyledSubmitButton} />
            </form>
          </div>
        </Modal> 
    </>
  );
}

const mapStateToProps = (state) => ({
  show: state.modal.show,
  type: state.modal.type,
  title: state.modal.modalTitle,
  movie: state.modal.movie
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
