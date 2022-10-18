import React from 'react';
import './Css/todoButton.css';

function TodoButton(props) {
  return (
    <button type="button" className="CreateTodoButton" onClick={props.onClick}>+</button>
  );
}

export default TodoButton;
