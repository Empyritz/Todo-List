import React from 'react';
import './Css/todoCounter.css'


const TodoCounter = ({totalTodos, completedTodos}) => {
  return (
    <h1 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h1>
  )
}

export { TodoCounter }