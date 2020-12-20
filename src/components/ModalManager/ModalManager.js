import React from 'react';
import './MovieEditModal.css';
import AddMoviePopup from '../AddMoviePopup/AddMoviePopup';
import EditMoviePopup from '../EditMoviePopup/EditMoviePopup';
import EditMenu from '../EditMenu/EditMenu';
import { connect } from 'react-redux';
import DeleteMoviePopup from '../DeleteMoviePopup/DeleteMoviePopup';
import { Modal } from '../Modal/Modal';
import { closeModal } from '../../redux/action';

const ModalConductor = ({ currentModal, show, handleCloseModal, movie }) => {
  switch (currentModal) {
    case 'add':
      return (
        <Modal show={show}>
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>x</span>
            ADD MOVIE
            <AddMoviePopup movie={movie} />
          </div>
        </Modal>
      )
    case 'menu':
      return <EditMenu />;

    case 'edit':
      return (
        <Modal show={show}>
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>x</span>
            EDIT MOVIE
            <EditMoviePopup movie={movie} />
          </div>
        </Modal>
      )
    case 'delete':
      return (
        <Modal show={show}>
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>x</span>
        EDIT MOVIE<DeleteMoviePopup />
          </div>
        </Modal>
      )
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  currentModal: state.modal.modalType,
  show: state.modal.show,
  movie: state.modal.movie
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