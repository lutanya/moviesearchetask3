import React, {useState} from 'react';
import {StyledInput} from './StyledInput';
import PropTypes from 'prop-types';

/**
 * @param {string} label label on input
 * @return {Element} inputs in the edit form
 */
export function MovieInfoInput({label, placeholder}) {
  const [value, setValue]=useState();
  const handleChange=(event)=>setValue( event.target.value);
  return (
    <StyledInput>
      <p>{label}</p>
      <input type="text" value={value} onChange={handleChange} placeholder={placeholder}/>
    </StyledInput>
  );
}

MovieInfoInput.propTypes={
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
