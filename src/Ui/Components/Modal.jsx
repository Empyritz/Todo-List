import React from 'react';
import ReactDOM from 'react-dom';
import './Css/modal.css';

const Modal = ({ children }) => ReactDOM.createPortal(
  <div className="ModalBackground">{children}</div>,
  document.getElementById('modal'),
);

export default Modal;
