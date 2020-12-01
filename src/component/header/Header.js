import React from "react";

import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

import styled, { css } from "styled-components";

const StyledHeader = styled.header`
background-color: #232323;
height: 400px;
padding: 2% 5%;
position: relative;
font-size: 130%;
margin-bottom: 10px;
`;

const StyledHeaderTitle = styled.p`
font-size: 2em;
padding: 1% 5%; 
position:  absolute;
font-weight: 100;
`;

const SearchArea = styled.div`
position:  absolute;
padding: 11% 5%; 
`;

const StyledAddButton = css`
  position: absolute;
  right: 40px; top: 15px;
`

const Input = styled.input`
width: 700px;
padding: 0.8em 1em;
font-size: inherit;
border:none;
border-radius: 4px; 
background-color #555555;
color: #FFFFFF;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button label="+ADD MOVIE" action={addMovie} position={StyledAddButton} />
      <StyledHeaderTitle>FIND YOUR MOVIE</StyledHeaderTitle>
      <SearchArea>
        <Input placeholder='What do you want to watch?' />
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

