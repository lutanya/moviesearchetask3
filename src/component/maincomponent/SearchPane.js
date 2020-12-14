import React from 'react';
import FilterButton from '../button/FilterButton';
import {StyledUl} from '../button/StyledFilterButton.js';

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
      <StyledUl align_right>
        <li>SORT BY</li>
        <li><FilterButton genre='RELEASE DATE' /></li>
      </StyledUl>
    </>
  );
}

