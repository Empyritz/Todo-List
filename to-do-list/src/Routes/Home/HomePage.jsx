import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import TodoButton from '../../Ui/Components/TodoButton';
import TodoList from '../../Ui/Components/TodoList';
// import { TodoForm } from '../../Ui/Components/TodoForm';
import TodoSearch from '../../Ui/Components/TodoSearch';
import TodoCounter from '../../Ui/Components/TodoCounter';
import useTodos from '../useTodos';
import TodoError from '../../Ui/Components/TodoError';
import TodoLoading from '../../Ui/Components/TodoLoading';
import EmptyTodos from '../../Ui/Components/EmptyTodos';
import TodoItem from '../../Ui/Components/TodoItem';
import EmptySearch from '../../Ui/Components/EmptySearch';
import TodoHeader from '../../Ui/Components/TodoHeader';
import ChangeAlert from '../../Ui/Components/ChangeAlert/ChangeAlert';

// const todosList = searchedTodos.map()

// ----------------------------------------- APP ----------------------
function HomePage() {
  const navigate = useNavigate();
  // console.log('home page');

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    valueSearch,
    setValueSearch,
    // addTodo,
    // editTodo,
    completeTodo,
    deleteTodo,
    searchedTodos,
    updateTodos,
  } = useTodos();

  // ---LISTA DE TODOS

  return (
    <>
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
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearch={() => <EmptySearch valueSearch={valueSearch} />}
        render={(todo, index) => (<TodoItem key={index} {...todo} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={() => navigate(`/edit${todo.id}`, { state: { todo } })} />)}
      />
      {/* Separacion */}
      <TodoButton onClick={() => navigate('./new')} />
      {/* {openModal &&  <Modal>
        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
      </Modal>} */}
      <ChangeAlert updateTodos={updateTodos} />
    </>
  );
}

export default HomePage;
