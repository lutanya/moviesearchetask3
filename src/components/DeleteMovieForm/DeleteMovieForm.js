import React from 'react';
import { StyledSubmitButton, StyledButton } from '../Button/StyledButton.js';

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

export default function DeleteMovieForm({ movie, handleDeleteMovie }) {
  return (
    <form>
      Are you sure you want to delete this movie?
      <StyledButton
        label="CONFIRM"
        onClick={(event) => handleDeleteMovie(event, movie)}
        colored
        position={StyledSubmitButton}
      >
        CONFIRM
      </StyledButton>
    </form>
  );
}
