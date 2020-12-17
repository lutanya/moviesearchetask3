import styled, {css} from 'styled-components';

export const StyledFilterButton = styled.button`
    border: none;
    background-color: transparent;
    color: inherit;
    padding: 0;
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0;
${(props) => props.align_right &&
        css`
        position: absolute;
        right: 60px; top: 0px;
`}
> li {
        display:inline-block;
        margin-right: 30px;
}
`;
