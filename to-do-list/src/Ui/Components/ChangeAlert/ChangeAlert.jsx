import React from 'react';
import PropTypes from 'prop-types';
import useStorageListener from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ updateTodos }) {
  const { show, toggleShow } = useStorageListener(updateTodos);
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            type="button"
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  }
  return null;
}

ChangeAlert.propTypes = {
  updateTodos: PropTypes.func.isRequired,
};

export default ChangeAlert;
