import React from 'react';
import ReactDOM from 'react-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, onClose, open, title, tick }) =>
  open
    ? ReactDOM.createPortal(
      <div className="modal-content">
        <span className="close" onClick={onClose}>x</span>
        <h1>
          {tick ?
            <center>
                <CheckCircleIcon color="secondary" style={{ borderRadius: 50, background: '#FFF', color: '#F65261', fontSize: 70 }} />
              <br />
              {title}
            </center> :
            title
          }
        </h1>
        {children}
      </div>,
      modalRoot
    )
    : null



