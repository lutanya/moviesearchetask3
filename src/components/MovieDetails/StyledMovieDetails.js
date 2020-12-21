import styled, {css} from 'styled-components';

export const StyledMovieDetails = styled.div`
${(props) => !props.show &&
    css`
        display:none;
    `
}
  ${(props) => props.show &&
    css`
        display:block;
    `
}
`;
