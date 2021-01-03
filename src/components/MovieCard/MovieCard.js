import React, {useCallback, useMemo} from 'react';
import LongMenu from '../EditMenu/EditMenu.js';
import {StyledMovieCard, StyledDescription} from './StyledMovieCard.js';
import PropTypes from 'prop-types';
import {StyledImg} from './StyledImg.js';
import {MovieDetails} from '../MovieDetails/MovieDetails.js';
import {useToggle} from '../useToggle/useToggle.js';

/**
 * @param {string} src Image url
 * @param {string} title Film title
 * @param {Array} genresList List of film genres
 * @param {string} release Year of film release
 * @return {Component} Film card
 */
export function MovieCard({movie}) {
  const genres = useMemo(() => movie.genres.length == 2 ? movie.genres.join('&') : movie.genres.join(', '), [movie.genres]);
  const release = useMemo(() => movie.release_date.split('-')[0], [movie.release_date]);
  const [showDetails, setShowDetails] = useToggle(false);
  const showToggle = useCallback(() => setShowDetails(), [showDetails]);
  return (
    <StyledMovieCard>
      <LongMenu movie={movie} />
      <span onClick={showToggle}>
        <StyledImg src={movie.poster_path} />
        <StyledDescription>
          <h3>{movie.title}</h3>
          <p>{genres}</p>
          <div>{release}</div>
        </StyledDescription>
        <MovieDetails className='movie-details' movie={movie} showToggle={showToggle} show={showDetails} />
      </span>
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
