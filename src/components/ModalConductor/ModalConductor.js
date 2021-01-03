import React from 'react';
import './ModalConductor.css';
import EditMenu from '../EditMenu/EditMenu';
import { connect } from 'react-redux';
import DeleteMovieForm from '../DeleteMovieForm/DeleteMovieForm';
import { Modal } from '../Modal/Modal';
import { closeModal, handleAddMovie, handleFormReset, handleEditMovie, handleDeleteMovie } from '../../redux/action';
import PropTypes from 'prop-types';

import {
  TITLE,
  RELEASE_DATE,
  MOVIE_URL,
  GENRES,
  OVERVIEW,
  RUNTIME,
} from '../../redux/reducers/constants';
import MovieForm from '../MovieForm/MovieForm';

const placeholder =
  ['id',
    'Select Title',
    'Select Date',
    'Movie URL here',
    'Select genre',
    'Overview here',
    'Runtime here'];


export function isFormValid(movie, handleFormErrors) {
  const errors = [];
  let formIsValid = true;

  if (movie[GENRES] == null || movie[GENRES].length == 0) {
    formIsValid = false;
    errors[GENRES] = "Select at least one genre to proceed";
    handleFormErrors(errors);
  }

  return formIsValid;
}

const ModalConductor = ({ currentModal,
  show,
  movie,
  handleCloseModal,
  handleFormReset,
  handleAddMovie,
  handleEditMovie,
  handleDeleteMovie }) => {

  function handleAddMovieSubmit(event, movie, handleFormErrors) {
    event.preventDefault();

    if (isFormValid(movie, handleFormErrors)) {
      handleAddMovie(movie);
    }
  }

  function handleEditMovieSubmit(event, movie, handleFormErrors) {
    event.preventDefault();

    if (isFormValid(movie, handleFormErrors)) {
      handleEditMovie(movie);
    }
  }
  switch (currentModal) {
    case 'add':
      return (
        <Modal open={show} onClose={handleCloseModal} title='ADD MOVIE'>
          <MovieForm
            movie={movie}
            placeholder={placeholder}
            handleFormReset={handleFormReset}
            submitLable='SUBMIT'
            handleFormSubmit={handleAddMovieSubmit}
          />
        </Modal>
      );
    case 'menu':
      return <EditMenu />;

    case 'edit':
      return (
        <Modal open={show} onClose={handleCloseModal} title='EDIT MOVIE'>
          <MovieForm
            movie={movie}
            placeholder={placeholder}
            handleFormReset={handleFormReset}
            submitLable='SAVE'
            handleFormSubmit={handleEditMovieSubmit}
          />
        </Modal>
      );
    case 'delete':
      return (
        <Modal open={show} onClose={handleCloseModal} title='DELETE MOVIE'>
          <DeleteMovieForm movie={movie} handleDeleteMovie={handleDeleteMovie} />
        </Modal>
      );
    case 'addMovieSuccess':
      return (
        <Modal open={show} onClose={handleCloseModal} title='CONGRATULATIONS !' tick>
          <center>The movie has been added to <br />database successfully</center>
        </Modal>
      );

    default:
      return null;
  }
};

ModalConductor.propTypes = {
  currentModal: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentModal: state.modal.modalType,
  show: state.modal.show,
  movie: state.modal.movie,
});

/**
* @param dispatch
*/
function mapDispatchToProps(dispatch) {
  return {
    handleCloseModal: () => dispatch(closeModal()),
    handleFormReset: (event) => { event.preventDefault(); dispatch(handleFormReset()) },
    handleAddMovie: (movie) => dispatch(handleAddMovie(movie)),
    handleEditMovie: (movie) => dispatch(handleEditMovie(movie)),
    handleDeleteMovie: (event, movie) => { event.preventDefault(); dispatch(handleDeleteMovie(movie)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);





