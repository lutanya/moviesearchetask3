import React from "react";
import { StyledMovieCard, StyledDescription } from "../../style/StyledMovieCard.js";

export function MovieCard({ src, title, genres, release }) {
  return (
    <StyledMovieCard>
      <img src={src} alt={title} />
      <StyledDescription>
        <h3>{title}</h3>
        <p>{genres.length == 2 ? genres.join('&') : genres.join(', ')}</p>
        <div>{release.split('-')[0]}</div>
      </StyledDescription>
    </StyledMovieCard>
  );
}

MovieCard.defaultProps = {
  src: 'C:/Users/tatsiana_liubetskaya/Downloads/image-not-found.jpg',
}



