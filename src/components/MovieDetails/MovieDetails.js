import React from 'react';
import { StyledImg } from './StyledImg';
import './MovieDetails.css';

export const MovieDetails = ({movie,className}) => {
  return (
    <div className={className}>
      <StyledImg src={movie.poster_path}></StyledImg>
      {movie.title}
      {movie.vote_average}
      {movie.revenue}
      {movie.release_date}
      {movie.runtime}
      {movie.overview}
    </div>
  );
};
