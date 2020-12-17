import React from 'react';
import {Logo} from '../Logo/Logo';
import {StyledFooter} from './StyledFooter.js';

/**
 * @return {Element} footer of the app
 */
export function Footer() {
  return (
    <StyledFooter>
      <Logo />
    </StyledFooter>
  );
}

