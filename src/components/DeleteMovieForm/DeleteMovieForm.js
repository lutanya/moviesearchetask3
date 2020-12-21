import React from 'react';
import {Button} from '../Button/Button';
import {StyledSubmitButton} from '../Button/StyledButton.js';

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

export default function DeleteMoviePopup() {
  return (
    <form>
      Are you sure you want to delete this movie?
      <Button label="CONFIRM" action={addMovie}
        colored position={StyledSubmitButton} />
    </form>
  );
}
