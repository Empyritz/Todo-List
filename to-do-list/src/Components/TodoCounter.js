import React from 'react';
import './Css/todoCounter.css'


const TodoCounter = ({totalTodos, completedTodos, loading}) => {
  return (
    <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos} TODOs</h1>
  )
}

export { TodoCounter }