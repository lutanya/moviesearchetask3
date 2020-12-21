import Background from './image-not-found.jpg';
import styled, {css} from 'styled-components';

export const StyledImg = styled.div`
    ${(props) =>
    css`
        float: left;
        width: 330px;
        height: 495px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${props.src}), url(${Background});
        background-color: #585858;
    `}
`;
