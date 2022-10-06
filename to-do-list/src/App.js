import React, { useEffect, useState } from 'react';
import './App.css';
import { TodoButton } from './Components/TodoButton';
import { TodoCounter } from './Components/TodoCounter';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';
import { useGlobalContext } from './Context/TodoContext' 
import { Modal } from './Components/Modal'
import { TodoForm } from './Components/TodoForm';


//----------------------------------------- APP ----------------------
function App() {
  const { loading, error, totalTodos, openModal} = useGlobalContext()

  //---LISTA DE TODOS

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <div className='conditionalScreens'>
          {loading && <p>Estamos cagandooo, pasame el papel</p>}
          {error && <p>Ya se cagooo esto</p>}
          {(!loading && totalTodos === 0) && <p>Escribe tu primer Todo</p>}
        </div>
        
      </TodoList>
      <TodoButton />
     {openModal &&  <Modal>
        <TodoForm />
      </Modal>}
    </React.Fragment>
  );
}

export default App;
