import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';


// const TodoContext = React.createContext()

const useTodos = ()=> {
  //---ESTADOS
  const {item: todos, saveItem: saveTodos, loading, error, updateItem: updateTodos} = useLocalStorage('TODOS_V1', [])
  // const [todos, saveTodos] = useLocalStorage('TODOS_V1', defaultTodos)
  const [valueSearch, setValueSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

 //--- VARIABLES COMO PROPS
  const completedTodos = todos.filter((item)=> !!item.completed).length
  const totalTodos = todos.length
  
 //--- FILTRADO DE LISTA
  let searchedTodos = []
  if (!valueSearch.length >= 1){
    searchedTodos = todos
  }else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = valueSearch.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  //---ACCIONES DE BORRAR, CHECKEAR Y AGREGAR
  const deleteTodo = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    saveTodos(newTodos)
  }
  const completeTodo = (id) => {
    let newTodos = todos.map((item) => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item
      }
    })
    saveTodos(newTodos)
  }
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({ completed: false,
      text,
      id: todos.length + 1
    })
    saveTodos(newTodos)
  }


  
  return(
    {
      todos, 
      saveTodos, 
      loading, 
      error, 
      valueSearch,
      setValueSearch,
      completedTodos,
      totalTodos,
      deleteTodo,
      completeTodo,
      searchedTodos,
      openModal,
      setOpenModal,
      addTodo,
      updateTodos,
    }
  )
}

export {useTodos}
