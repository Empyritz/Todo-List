import React from 'react';
import './Css/todoButton.css'

const TodoButton = ({ setOpenModal }) => {

  return (
    <button className='CreateTodoButton' onClick={()=> setOpenModal(prev => !prev)}>+</button>
  )
}

export { TodoButton }