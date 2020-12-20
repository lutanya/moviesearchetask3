import React, { useState } from 'react';
import { StyledInput } from './StyledInput';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleInputChange } from '../../redux/action';

/**
 * @param {string} label label on input
 * @return {Element} inputs in the edit form
 */
function Input({ label, placeholder, movie, handleInputChange }) {
  const [value,setValue]=useState(movie[label])
  const handleChange = (event) => {
    setValue(event.target.value);
    handleInputChange(event.target.value, label);
  }
  return (
    <StyledInput>
      <p>{label}</p>
      <input type="text" value={value} onChange={handleChange} placeholder={placeholder} />
    </StyledInput>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.modal.movie
});

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleInputChange: (value, label) => dispatch(handleInputChange(value, label)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);

