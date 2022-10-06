import React, { useState } from 'react';
import { useGlobalContext } from '../Context/TodoContext';
import './Css/todoForm.css'

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useGlobalContext()
  const [newTodoValue, setNewTodoValue] = useState()

  
  const handlerSubmit = (e)=> {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(prev => !prev)

  }
  
  const handlerCancel = ()=> {
    setNewTodoValue('')
    setOpenModal(prev => !prev)
  }

  const handlerChange = (e)=> {
    setNewTodoValue(e.target.value)
  }

  return(
    <form onSubmit={handlerSubmit}>
      <label>Escribe un nuevo Todo</label>
      <textarea placeholder='Agrega tu Todo' onChange={handlerChange} value={newTodoValue}/>
      <div className='TodoForm-buttonContainer'>
        <button onClick={handlerCancel} className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
        <button type='submit' className='TodoForm-button TodoForm-button--add' >Añadir</button>
      </div>
    </form>
  )
}