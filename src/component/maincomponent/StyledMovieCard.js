import styled from 'styled-components';
import Background from './image-not-found.jpg';

export const StyledMovieCard = styled.div`
    margin: 5px;
    float: left;
    width: 325px;
    height: 606px;
    margin-right: 50px;  
    background-image: url(${Background});
    > img {
        
        width: 100%;
        height: auto;
    }
`;

export const StyledDescription = styled.div`
width: 325px;
    padding-bottom: 15px;
    text-align: left;
    position: absolute;
    > h3 {
        font-weight:normal;
        margin-bottom: 5px;
    }
    > p {
        margin-top: 18px;
    }
    > div {
        position: absolute;
        right: 0; top: 0px;
        border: solid #FFFFFF 1px;
        border-radius: 4px;
        padding: 4px 12px;
    }
`;
