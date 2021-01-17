import React, { useEffect, useMemo, useState } from 'react';
import { StyledImg } from './StyledImg';
import { StyledTimeInfo } from './StyledTimeInfo';
import { StyledTitle } from './StyledTitle';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  useEffect(()=>axios
      .get(`http://localhost:4000/movies/${movieId}`)
      .then((res) => {
        setMovie(res.data.data);
      }));
  //useEffect(() => { handleFetchMovie(movieId) }, [movieId]);
  if(movie){
  const release = useMemo(() => movie.release_date.split('-')[0], [movie.release_date]);
  }
console.log("Movie Id: ", movieId)
  return (
    <>{movie?
      <>
      <Link to="/">close</Link>
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
      </>
      :
      null
      }
    </>
  );
};

async function getData(url) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *client
  });
   // console.log( "response:",await response.json());

  return await response.json();
}
