import React from 'react';
import './Css/todoCounter.css'
import { useGlobalContext } from '../Context/TodoContext' 


const TodoCounter = () => {
  const {totalTodos, completedTodos } = useGlobalContext()
  return (
    <h1 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h1>
  )
}

export { TodoCounter }