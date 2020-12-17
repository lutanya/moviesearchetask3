
import axios from 'axios';
import {
  FETCH_BY_GENRE_SUCCESS,
  FETCH_BY_GENRE_FAILURE,
  FETCH_BY_GENRE_STARTED,
} from './types';

export const fetchByGenre = (genre) => {
  return (dispatch) => {
    dispatch(fetchByGenreStarted());
    const url = new URL('http://localhost:4000/movies');
    if (genre != undefined && genre != 'ALL') {
      const params = {searchBy: 'genres', search: genre.toLowerCase()};
      Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    }
    axios
        .get(url)
        .then((res) => {
          console.log('from client', res.data.data);
          dispatch(fetchByGenreSuccess(res.data.data));
        })
        .catch((err) => {
          dispatch(fetchByGenreFailure(err.message));
        });
  };
};

export const fetchBySortParam = (sortParam) => {
  return (dispatch) => {
    dispatch(fetchByGenreStarted());
    const url = new URL('http://localhost:4000/movies');

    const params = {sortBy: sortParam.toLowerCase().replace(' ', '_'), sortOrder: 'desc'};
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    axios
        .get(url)
        .then((res) => {
          console.log('from client', res.data.data);
          dispatch(fetchByGenreSuccess(res.data.data));
        })
        .catch((err) => {
          dispatch(fetchByGenreFailure(err.message));
        });
  };
};

const fetchByGenreSuccess = (movies) => ({
  type: FETCH_BY_GENRE_SUCCESS,
  payload: movies,
});

const fetchByGenreStarted = () => ({
  type: FETCH_BY_GENRE_STARTED,
});

const fetchByGenreFailure = (error) => ({
  type: FETCH_BY_GENRE_FAILURE,
  payload: {
    error,
  },
});

export const openModalByType = (type, title) => ({
  type: 'OPEN_MODAL_BY_TYPE',
  playload: [type, title],
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL_BY_TYPE',
});
