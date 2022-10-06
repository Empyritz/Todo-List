import React from 'react';
import './Css/todoList.css'
import { TodoItem } from './TodoItem';
import { useGlobalContext } from '../Context/TodoContext' 


export const TodoList = ({children}) => {
  const { searchedTodos, completeTodo, deleteTodo } = useGlobalContext()
  const todosList = searchedTodos.map((item, index)=>(<TodoItem key={index} {...item} completeTodo={completeTodo} deleteTodo={deleteTodo}/>)) 

  return (
    <section>
      <ul>
        {children}
        {todosList}
      </ul>
    </section>
  )
}
