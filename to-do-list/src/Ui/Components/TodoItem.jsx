import React from 'react';
import './Css/todoItem.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types';

function TodoItem({
  text, completed, deleteTodo, completeTodo, editTodo, id,
}) {
  // console.log('todo item');
  return (
    <li className="TodoItem">
      <span role="presentation" className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={() => completeTodo(id)}>
        <BsFillCheckCircleFill />
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span role="presentation" className="Icon Icon-edit" onClick={editTodo}>
        <MdEdit />
      </span>
      <span role="presentation" className="Icon Icon-delete" onClick={() => deleteTodo(id)}>
        <AiFillDelete />
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  completeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

TodoItem.defaultProps = {
  completed: false,
};

export default TodoItem;
