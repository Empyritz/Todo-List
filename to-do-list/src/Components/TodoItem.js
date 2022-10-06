import React from 'react';
import './Css/todoItem.css'


const TodoItem = ({text, completed, deleteTodo, completeTodo, id}) => {
  return (
    <li className="TodoItem">
    <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={()=>completeTodo(id)}>
      √
    </span>
    <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
      {text}
    </p>
    <span className="Icon Icon-delete" onClick={()=> deleteTodo(id)}>
      X
    </span>
  </li>
  )
}

export { TodoItem }