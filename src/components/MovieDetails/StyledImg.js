import Background from '../MovieCard/image-not-found.jpg';
import styled, {css} from 'styled-components';

export const StyledImg = styled.div`
    ${(props) =>
    css`
        width: 100%;
        margin-right: 20px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${props.src}), url(${Background});
        background-color: #585858;
    `}
`;
