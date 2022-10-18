import React, { useState } from 'react';
import './Css/todoForm.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// @item: object task from todo list
function TodoForm({
  submitEvent, label, placeholder, submitText, defaultTodoText,
}) {
  const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || '');
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    submitEvent(newTodoValue);
    navigate('/');
  };

  const handlerCancel = () => {
    setNewTodoValue('');
    navigate('/');
  };

  const handlerChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label htmlFor="todoText">{label}</label>
      <textarea placeholder={placeholder} onChange={handlerChange} value={newTodoValue} id="todoText" />
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={handlerCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">{submitText}</button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  submitEvent: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  defaultTodoText: PropTypes.string,
};

TodoForm.defaultProps = {
  defaultTodoText: '',
};

export default TodoForm;
