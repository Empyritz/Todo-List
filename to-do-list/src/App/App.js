import React from 'react';
import './App.css';
import { TodoButton } from '../Components/TodoButton';
import { TodoList } from '../Components/TodoList';
import { Modal } from '../Components/Modal'
import { TodoForm } from '../Components/TodoForm';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoCounter } from '../Components/TodoCounter';
import { useTodos } from './useTodos'
import { TodoError } from '../Components/TodoError';
import { TodoLoading } from '../Components/TodoLoading';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodoItem } from '../Components/TodoItem';
import { EmptySearch } from '../Components/EmptySearch';
import { TodoHeader } from '../Components/TodoHeader'; 

// const todosList = searchedTodos.map() 

//----------------------------------------- APP ----------------------
function App() {
  const { 
    loading,
    error, 
    totalTodos, 
    completedTodos,
    openModal,
    valueSearch,
    setValueSearch,
    addTodo,
    setOpenModal,
    completeTodo,
    deleteTodo,
    searchedTodos
  } = useTodos()

  //---LISTA DE TODOS

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      </TodoHeader>
      {/* Render functions y render props */}
      <TodoList  
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onError={()=> <TodoError />}
        onLoading={()=> <TodoLoading />}
        onEmptyTodos={()=> <EmptyTodos />}
        onEmptySearch={()=> <EmptySearch valueSearch={valueSearch}/>}
        render={(item, index)=>(<TodoItem key={index} {...item} completeTodo={completeTodo} deleteTodo={deleteTodo}/>)}
      />
      {/* Separacion */}
      <TodoButton setOpenModal={setOpenModal}/>
     {openModal &&  <Modal>
        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
      </Modal>}
    </React.Fragment>
  );
}

export default App;
