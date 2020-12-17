import React from 'react';
import BindDropDown from '../BindDropDown/BindDropDown';
import FilterButton from '../button/FilterButton';
import {StyledUl} from '../button/StyledFilterButton.js';
import {StyledLabel} from './StyledLabel';

/**
 * @return {Element} search movies by genre pane
 */
export function SearchPane() {
  return (
    <>
      <StyledUl>
        <li><FilterButton genre='ALL' /></li>
        <li><FilterButton genre='DOCUMENTARY' /></li>
        <li><FilterButton genre='COMEDY' /></li>
        <li><FilterButton genre='HORROR' /></li>
        <li><FilterButton genre='CRIME' /></li>
      </StyledUl>
      <BindDropDown/>
    </>
  );
}

