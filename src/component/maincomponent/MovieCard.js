import React from "react";
import styled, { css } from "styled-components";

const StyledMovieCard = styled.div`
margin: 5px;
    float: left;
    width: 325px;
    margin-right: 50px;
`;

const Img = styled.img`
width: 100%;
    height: auto;
`;

const Description = styled.div`
padding-bottom: 15px;
    text-align: left;
    position:relative;
`;

const H3 = styled.h3`
font-weight:normal;
margin-bottom: 5px
`;

const P = styled.p`
margin-top: 18px
`;

const Div = styled.div`
position: absolute;
right: 0; top: 0px;
border: solid #FFFFFF 1px;
border-radius: 4px;
padding: 4px 12px;
`;

export function MovieCard({ src, title, genres, release }) {
  return (
    <StyledMovieCard>
      <Img src={src} alt={title}></Img>
      <Description>
        <H3>{title}</H3>
        <P>{genres.length==2?genres.join('&'):genres.join(', ')}</P>
        <Div>{release.split('-')[0]}</Div>
      </Description>
    </StyledMovieCard>
  );
}
MovieCard.defaultProps = {
  src: 'C:/Users/tatsiana_liubetskaya/Downloads/image-not-found.jpg',
}



