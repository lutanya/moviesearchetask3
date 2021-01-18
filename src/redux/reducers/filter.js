import {
  FETCH_BY_GENRE_SUCCESS,
  FETCH_BY_GENRE_FAILURE,
  FETCH_BY_GENRE_STARTED,
} from '../action/types';

const initialState = {
  movies: [],
  error: null,
  loading: false,
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
        error: action.error,
      };
    default: return state;
  }
};

