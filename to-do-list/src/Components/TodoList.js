import React from 'react';
import './Css/todoList.css'


export const TodoList = ({error, loading, totalTodos, searchedTodos, ...props}) => {
  // const { searchedTodos, completeTodo, deleteTodo } = useTodos()

  return (
    <section className='TodoList-container'>
      <ul>
        {error && props.onError()}
        {loading && props.onLoading()}
        {(!loading && !totalTodos) && props.onEmptyTodos()}
        {(!!totalTodos && !searchedTodos.length) && props.onEmptySearch()}
        {searchedTodos.map((todo, index) => props.render(todo, index))}
        {/* {props.searchedTodos.map(props.render)} */}
      </ul>
    </section>
  )
}
