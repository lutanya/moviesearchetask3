import React, {useEffect, useState} from 'react';
import {StyledImg} from './StyledImg';
import {StyledTimeInfo} from './StyledTimeInfo';
import {StyledTitle} from './StyledTitle';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {StyledMovieDetails} from './StyledMovieDetails';

export default function MovieDetails() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => axios
      .get(`http://localhost:4000/movies/${movieId}`)
      .then((res) => {
        setMovie(res.data);
      }), [movieId]);
  const release = movie ? movie.release_date.split('-')[0] : null;

  return (
    movie ?
    <>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/" className='close-link'>close</Link>
      </div>
      <StyledMovieDetails>
        <StyledImg src={movie.poster_path} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <StyledTitle>
            {movie.title}
            <span>{movie.vote_average}</span>
          </StyledTitle>
          {movie.tagline}
          <StyledTimeInfo>
            {release}&nbsp;&nbsp;&nbsp;&nbsp;{movie.runtime} min
          </StyledTimeInfo>
          {movie.overview}
        </div>
      </StyledMovieDetails>
    </> :
      null
  );
};

