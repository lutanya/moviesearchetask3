import React from "react";
import PropTypes from "prop-types";
import {StyledButton} from "../../style/StyledButton.js";

export function Button({ action, label, position, colored }) {
  return (
    <StyledButton position={position} colored={colored} onClick={action}>
      {label}
    </StyledButton>
  );
}
Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  position: PropTypes.array,
  colored: PropTypes.bool,
}

