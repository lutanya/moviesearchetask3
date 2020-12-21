const initialState = {
  show: false,
  modalType: '',
  movie: {
    'TITLE': '',
    'RELEASE DATE': '',
    'MOVIE URL': '',
    'GENRE': '',
    'OVERVIEW': '',
    'RUNTIME': '',
  },
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL_BY_TYPE':
      const movie = action.movie == null ? state.movie : action.movie;
      return {
        ...state,
        show: true,
        modalType: action.modalType,
        movie: movie,
      };
    case 'CLOSE_MODAL_BY_TYPE':
      return {
        ...state,
        show: false,
        type: '',
      };
    case 'CHANGE_INPUT_VALUE':
      switch (action.label) {
        case 'TITLE':
          return {
            ...state,
            movie: {
              ...state.movie,
              TITLE: action.value,
            },
          };
      };
    default: return state;
  }
};
