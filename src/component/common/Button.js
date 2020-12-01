import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled("button")`
background: #555555;
border: none;
  border-radius: 4px;  
  color: #F65261;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  font-size: inherit;
  ${props => props.colored &&
    css`
  background: #F65261;
  color: #FFFFFF;
  padding: 0.8em 3.2em;
`}
${props => props.position}
`;

export function Button({ action, label, position, colored }) {
  return (
    <StyledButton position={position} colored={colored} onClick={action}>
      {label}
    </StyledButton>
  );
}
Button.propTypes = {
  action: PropTypes.func,
  label: PropTypes.string.isRequired,
}

