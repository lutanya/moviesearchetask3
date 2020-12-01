import React,{useEffect} from "react";
import styled, { css } from "styled-components";
import {FilterButton} from '../common/FilterButton';

const Ul = styled.ul`
list-style-type: none;
padding: 0;
${props => props.align_right &&
    css`
    position: absolute;
    right: 60px; top: 0px;
`}
`;

const Li = styled.li`
display:inline-block;
margin-right: 30px;
`;

export function SearchPane({setMovies}) {
  return (
    <>
      <Ul>
        <Li><FilterButton setMovies={setMovies} label='ALL'/></Li>
        <Li><FilterButton setMovies={setMovies} label='DOCUMENTARY'/></Li>
        <Li><FilterButton  setMovies={setMovies} label='COMEDY'/></Li>
        <Li><FilterButton setMovies={setMovies} label='HORROR'/></Li>
        <Li><FilterButton setMovies={setMovies} label='CRIME'/></Li>
      </Ul><Ul align_right>
        <Li>SORT BY</Li>
        <Li><FilterButton label='RELEASE DATE'/></Li>
      </Ul>
    </>
  );
}

