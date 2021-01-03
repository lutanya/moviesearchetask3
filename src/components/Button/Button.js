import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './StyledButton';

/**
 * @param {Function} action action on click button
 * @param {string} label button label
 * @param {CSSRule} position button position plus edditional styles
 * @param {boolean} colored if true filled by color button
 * @param {boolean} empty if true without background-color but with border
 * @return {Element} button
 */
export function Button({action, label, position, colored, empty}) {

  return (
    <StyledButton position={position} colored={colored}
      onClick={(event)=>action(event)} empty={empty}>
      {label}
    </StyledButton>
  );
}
Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  position: PropTypes.array,
  colored: PropTypes.bool,
  empty: PropTypes.bool,
};

