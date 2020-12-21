import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');


export const Modal = ({ children, onClose, open, title }) =>
  open
    ? ReactDOM.createPortal(
      <div className="modal-content">
        <span className="close" onClick={onClose}>x</span>
        {title}
        {children}
      </div>,
      modalRoot
    )
    : null



