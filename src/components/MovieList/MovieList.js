import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from './MovieCard';

/**
 * @return {Element} galery of the movies
 * @param {Array} movies a list with the movies
 */
export default function MovieList({movies}) {
  const [moviesCounter, setMoviesCounter] = useState([]);
  useEffect(() => setMoviesCounter(movies.length));
  return (
    <>
      <p>{moviesCounter} movies found</p>
      {movies.map((movie) => (
        <MovieCard key={movie.id} index={movie.id} title={movie.title} src={movie.poster_path} genresList={movie.genres} release={movie.release_date} />
      ),
      )}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
