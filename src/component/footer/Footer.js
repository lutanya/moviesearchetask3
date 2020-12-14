import React from 'react';
import {Logo} from '../common/Logo';
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

