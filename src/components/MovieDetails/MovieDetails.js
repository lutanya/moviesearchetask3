import React, {useMemo} from 'react';
import {StyledImg} from './StyledImg';
import {StyledTimeInfo} from './StyledTimeInfo';
import './MovieDetails.css';
import {StyledTitle} from './StyledTitle';
import {Logo} from '../Logo/Logo';
import {StyledMovieDetails} from './StyledMovieDetails';
import PropTypes from 'prop-types';

export const MovieDetails = ({movie, className, show, showToggle}) => {
  const release = useMemo(() => movie.release_date.split('-')[0], [movie.release_date]);

  return (
    <StyledMovieDetails show={show} className={className}>
      <Logo />
      <button onClick={showToggle} >close</button>
      <p />
      <StyledImg src={movie.poster_path} />
      <StyledTitle>
        {movie.title}
        <span>{movie.vote_average}</span>
      </StyledTitle>
      {movie.tagline}
      <StyledTimeInfo>
        {release}&nbsp;&nbsp;&nbsp;&nbsp;{movie.runtime} min
      </StyledTimeInfo>
      {movie.overview}
    </StyledMovieDetails>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  showToggle: PropTypes.func.isRequired,
};
