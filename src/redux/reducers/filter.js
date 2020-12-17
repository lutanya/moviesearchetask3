import {
  FETCH_BY_GENRE_SUCCESS,
  FETCH_BY_GENRE_FAILURE,
  FETCH_BY_GENRE_STARTED,
} from '../action/types';

const initialState = {
  movies: [],
  error: null,
  loading: false,
  show: false,
  type: '',
  modalTitle: '',
};

/**
 * @return {object} new state in store
 * @param {object} state state in store
 * @param {object} action nessesary action by clicking the button
 */
export default function filter(state = initialState, action) {
  switch (action.type) {
    case FETCH_BY_GENRE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BY_GENRE_SUCCESS:

      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };
    case FETCH_BY_GENRE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'OPEN_MODAL_BY_TYPE':
      return {
        ...state,
        show: true,
        type: action.playload[0],
        modalTitle: action.playload[1],
      };
    case 'CLOSE_MODAL_BY_TYPE':
      return {
        ...state,
        show: false,
        type: '',
      };
    default: return state;
  }
};

export const getMovies = (state) => state.movies;
export const getMoviesLoading = (state) => state.loading;
export const getMoviesError = (state) => state.error;
