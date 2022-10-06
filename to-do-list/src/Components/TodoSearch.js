import React from 'react';
import './Css/todoSearch.css';
import { useGlobalContext } from '../Context/TodoContext' 



const TodoSearch = () => {
  const { setValueSearch, valueSearch } = useGlobalContext()

  const handlerCHange  = (e) => {
    const value = e.target.value 
    setValueSearch(value)
  }

  return (
    <input type="text" className='TodoSearch' placeholder='Find...' onChange={handlerCHange} value={valueSearch}/>
  )
}

export { TodoSearch }