import axios from 'axios';
import {
  FETCH_BY_GENRE_SUCCESS,
  FETCH_BY_GENRE_FAILURE,
  FETCH_BY_GENRE_STARTED,
  OPEN_MODAL_BY_TYPE,
  CLOSE_MODAL_BY_TYPE,
  CHANGE_INPUT_VALUE,
  RESET_VALUES,
  CHANGE_CHECKBOX_VALUES,
} from './types';

export const handleAddMovie = (movie) => {
  const url = new URL('http://localhost:4000/movies');
  return (dispatch) => {
    axios
        .post(url, movie)
        .then((response) => dispatch(addMovieSuccess(response.data)))
        .catch((error) => dispatch(fetchFailure(error.message)));
  };
};

export const handleEditMovie = (movie) => {
  const url = new URL('http://localhost:4000/movies');
  return (dispatch) => {
    axios
        .put(url, movie)
        .then(() => dispatch(closeModal()))
        .catch((error) => dispatch(fetchFailure(error.message)));
  };
};

export const handleDeleteMovie = (movie) => {
  const url = new URL(`http://localhost:4000/movies/${movie.id}`);
  return (dispatch) => {
    axios
        .delete(url)
        .then(() => dispatch(closeModal()))
        .catch((error) => dispatch(fetchFailure(error.message)));
  };
};

export const fetchMovies = (params) => {
  const url = new URL('http://localhost:4000/movies');
  return (dispatch) => {
    dispatch(fetchStarted());
    if (params != null) {
      Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    }
    axios
        .get(url)
        .then((res) => {
          dispatch(fetchSuccess(res.data.data));
        })
        .catch((err) => {
          dispatch(fetchFailure(err.message));
        });
  };
};


export const fetchByGenre = (genre) => {
  const params =
    genre != undefined && genre != 'ALL' ?
      {searchBy: 'genres', search: genre.toLowerCase()} :
      null;
  return fetchMovies(params);
};

export const fetchBySortParam = (sortParam) => {
  return fetchMovies({sortBy: sortParam.toLowerCase().replace(' ', '_'), sortOrder: 'desc'});
};

const fetchSuccess = (movies) => ({
  type: FETCH_BY_GENRE_SUCCESS,
  payload: movies,
});

const fetchStarted = () => ({
  type: FETCH_BY_GENRE_STARTED,
});

const fetchFailure = (error) => ({
  type: FETCH_BY_GENRE_FAILURE,
  error: error,
});

export const openModalByType = (type, movie) => ({
  type: OPEN_MODAL_BY_TYPE,
  modalType: type,
  movie: movie !== undefined ?
    {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genres: movie.genres,
      overview: movie.overview,
      runtime: Number(movie.runtime),
    } :
    null,
  genres: movie !== undefined ? movie.genres : null,
});

export const closeModal = () => ({
  type: CLOSE_MODAL_BY_TYPE,
});

export const handleInputChange = (value, label) => ({
  type: CHANGE_INPUT_VALUE,
  label: label,
  value: value,
});

export const handleFormReset = () => ({
  type: RESET_VALUES,
});

export const handleChangeCheckbox = (id) => ({
  type: CHANGE_CHECKBOX_VALUES,
  id: id,
});

export const handleFormErrors = (errors) =>
  ({
    type: 'HANDLE_ERRORS',
    errors: errors,
  });

export const addMovieSuccess = () => ({
  type: OPEN_MODAL_BY_TYPE,
  modalType: 'addMovieSuccess',
});


