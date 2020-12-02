import React from "react";

import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { StyledHeader, SearchArea, StyledAddButton } from "../../style/StyledHeader.js";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button label="+ ADD MOVIE" action={addMovie} position={StyledAddButton} />
      <p>FIND YOUR MOVIE</p>
      <SearchArea>
        <input placeholder='What do you want to watch?' />
        <Button label="SEARCH" action={searchMovie} colored />
      </SearchArea>
    </StyledHeader>
  );
};

function searchMovie(e) {
  console.log("searching...");
}

function addMovie(e) {
  console.log("adding...");
}

