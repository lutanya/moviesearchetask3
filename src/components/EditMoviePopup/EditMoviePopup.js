import React from 'react';
import { Button } from '../Button/Button';
import { StyledResetButton, StyledSubmitButton } from '../Button/StyledButton.js';
import Input from '../Input/Input';

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

export default function EditMoviePopup({ movie }) {
    const [placeholder] = [
        ['Select Title',
            'Select Date',
            'Movie URL here',
            'Select genre',
            'Overview here',
            'Runtime here'],
    ];
    return (
                    <form>
                        {Object.keys(movie).map((key, i) => (
                            <Input label={key} placeholder={placeholder[i]} />
                        ),
                        )}
                        <Button label="RESET" action={resetInputs}
                            empty='true' position={StyledResetButton} />
                        <Button label="SAVE" action={addMovie}
                            colored='true' position={StyledSubmitButton} />
                    </form>
    );
}

