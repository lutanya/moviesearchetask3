import React from 'react';
import ReactDOM from 'react-dom';
import './movieEditModal.css';

const modalRoot = document.getElementById('modal-root');

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    this.props.show? this.el.style.visibility='visible': this.el.style.visibility='hidden';
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

/**
 * @param {event} event click on reset button event
 */
function resetInputs(event) {
    console.log('undoInputs...');
  }
  
  /**
   * @param {event} event click on submit button event
   */
  function addMovie(event) {
    console.log('undoInputs...');
  }


  