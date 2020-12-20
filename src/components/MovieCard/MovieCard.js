import React, {Component, useMemo, useState} from 'react';
import LongMenu from '../EditMenu/EditMenu.js';
import {StyledMovieCard, StyledDescription} from './StyledMovieCard.js';
import PropTypes from 'prop-types';
import {StyledImg} from './StyledImg.js';
import { MovieDetails } from '../MovieDetails/MovieDetails.js';

/**
 * @param {string} src Image url
 * @param {string} title Film title
 * @param {Array} genresList List of film genres
 * @param {string} release Year of film release
 * @return {Component} Film card
 */
export function MovieCard({movie}) {
  const genres = useMemo(()=>movie.genres.length == 2 ? movie.genres.join('&') : movie.genres.join(', '), [movie.genres]);
  const release = useMemo(()=>movie.release_date.split('-')[0], [movie.release_date]);
  const [showDetails,setShowDetails]=useState(false)
  return (
    <StyledMovieCard onClick={showDetails}>
      <LongMenu movie={movie}/>
      <StyledImg src={movie.poster_path}></StyledImg>
      <StyledDescription>
        <h3>{movie.title}</h3>
        <p>{genres}</p>
        <div>{release}</div>
      </StyledDescription>
      <MovieDetails className='movie-details' movie={movie}/>
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
