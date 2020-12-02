import React, { useEffect } from "react";
import { FilterButton } from '../common/FilterButton';
import { StyledUl } from "../../style/StyledFilterButton.js";

export function SearchPane({ setMovies }) {
  return (
    <>
      <StyledUl>
        <li><FilterButton setMovies={setMovies} label='ALL' /></li>
        <li><FilterButton setMovies={setMovies} label='DOCUMENTARY' /></li>
        <li><FilterButton setMovies={setMovies} label='COMEDY' /></li>
        <li><FilterButton setMovies={setMovies} label='HORROR' /></li>
        <li><FilterButton setMovies={setMovies} label='CRIME' /></li>
      </StyledUl>
      <StyledUl align_right>
        <li>SORT BY</li>
        <li><FilterButton setMovies={setMovies} label='RELEASE DATE' /></li>
      </StyledUl>
    </>
  );
}

