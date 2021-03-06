import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
    background-color: #232323;
    height: 400px;
    padding: 2% 5%;
    position: relative;
    font-size: 130%;
    margin-bottom: 10px;

> p {
    font-size: 2em;
    padding: 1% 5%; 
    position:  absolute;
    font-weight: 100;
}
`;


export const SearchArea = styled.div`
    position:  absolute;
    padding: 11% 5%; 
> input {
    width: 700px;
    padding: 0.8em 1em;
    font-size: inherit;
    border:none;
    border-radius: 4px; 
    background-color #555555;
    color: #FFFFFF;
}
`;

export const StyledAddButton = css`
  position: absolute;
  right: 40px; top: 15px;
`
