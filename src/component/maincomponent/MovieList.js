import React, { useEffect, useState } from "react";

import { MovieCard } from './MovieCard';

import styled, { css } from "styled-components";

const StyledMovieList = styled.section`
`;


export function MovieList({ movies }) {
  const [moviesCounter, setMoviesCounter] = useState([]);
  useEffect(() => setMoviesCounter(movies.length));
  return (
    <StyledMovieList>
      <p>{moviesCounter} movies found</p>
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} src={movie.poster_path} genres={movie.genres} release={movie.release_date} />
      )
      )}
    </StyledMovieList>
  );
}

