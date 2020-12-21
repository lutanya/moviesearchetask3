import React from 'react';
import './ModalConductor.css';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import EditMovieForm from '../EditMovieForm/EditMovieForm';
import EditMenu from '../EditMenu/EditMenu';
import { connect } from 'react-redux';
import DeleteMovieForm from '../DeleteMovieForm/DeleteMovieForm';
import { Modal } from '../Modal/Modal';
import { closeModal } from '../../redux/action';
import PropTypes from 'prop-types';

const ModalConductor = ({ currentModal, show, handleCloseModal, movie }) => {
  const closeModal = () => handleCloseModal();
  const placeholder = 
    ['Select Title',
      'Select Date',
      'Movie URL here',
      'Select genre',
      'Overview here',
      'Runtime here'];
  switch (currentModal) {
    case 'add':
      return (
        <Modal open={show} onClose={closeModal} title='ADD MOVIE'>
          <AddMovieForm movie={movie} placeholder={placeholder}/>
        </Modal>
      );
    case 'menu':
      return <EditMenu />;

    case 'edit':
      return (
        <Modal open={show} onClose={closeModal} title='EDIT MOVIE'>
          <EditMovieForm movie={movie} placeholder={placeholder}/>
        </Modal>
      );
    case 'delete':
      return (
        <Modal open={show} onClose={closeModal} title='DELETE MOVIE'>
          <DeleteMovieForm />
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);
