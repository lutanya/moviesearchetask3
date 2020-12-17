import React, {Component, useMemo, useState} from 'react';
import LongMenu from '../EditMenu/EditMenu.js';
import {StyledMovieCard, StyledDescription} from './StyledMovieCard.js';
import PropTypes from 'prop-types';
/**
 * @param {string} src Image url
 * @param {string} title Film title
 * @param {Array} genresList List of film genres
 * @param {string} release Year of film release
 * @return {Component} Film card
 */
export function MovieCard({src, title, genresList, release, index}) {
  const [genres, setGenres]= useState();

  const [releaseYear, setReleaseYear]=useState();

  useMemo(()=>setGenres(genresList.length == 2 ? genresList.join('&') : genresList.join(', ')), [genres]);

  useMemo(()=>setReleaseYear(release.split('-')[0]), [releaseYear]);

  return (
    <StyledMovieCard>
      <LongMenu movieIndex={index}/>
      <img src={src}/>
      <StyledDescription>
        <h3>{title}</h3>
        <p>{genres}</p>
        <div>{releaseYear}</div>
      </StyledDescription>
    </StyledMovieCard>
  );
}

MovieCard.defaultProps = {
  src: 'C:/Users/tatsiana_liubetskaya/Downloads/image-not-found.jpg',
};

MovieCard.propTypes = {
  src: PropTypes.string.isRequired,
};
