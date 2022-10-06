import React from 'react';
import './Css/todoButton.css'
import { useGlobalContext } from '../Context/TodoContext';

const TodoButton = ( ) => {
  const { setOpenModal } = useGlobalContext()

  return (
    <button className='CreateTodoButton' onClick={()=> setOpenModal(prev => !prev)}>+</button>
  )
}

export { TodoButton }