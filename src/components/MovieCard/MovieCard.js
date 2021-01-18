import React, { useCallback, useMemo } from 'react';
import LongMenu from '../EditMenu/EditMenu.js';
import { StyledMovieCard, StyledDescription } from './StyledMovieCard.js';
import PropTypes from 'prop-types';
import { StyledImg } from './StyledImg.js';
import { useToggle } from '../useToggle/useToggle.js';
import { Link } from 'react-router-dom';

export function MovieCard({ movie }) {
  const genres = useMemo(() =>
    movie.genres.length == 2
      ? movie.genres.join('&')
      : movie.genres.join(', '),
    [movie.genres]);
  const release = useMemo(() => movie.release_date.split('-')[0], [movie.release_date]);
  const [showDetails, setShowDetails] = useToggle(false);
  const showToggle = useCallback(() => setShowDetails(), [showDetails]);
  return (
    <StyledMovieCard>
      <Link to={`/film/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <LongMenu movie={movie} />
        <span onClick={showToggle}>
          <StyledImg src={movie.poster_path} />
          <StyledDescription>
            <h3>{movie.title}</h3>
            <p>{genres}</p>
            <div>{release}</div>
          </StyledDescription>
        </span>
      </Link>
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
