import React from 'react';
import './Css/todoSearch.css';


const TodoSearch = ({setValueSearch, valueSearch}) => {

  const handlerCHange  = (e) => {
    const value = e.target.value 
    setValueSearch(value)
  }

  return (
    <input type="text" className='TodoSearch' placeholder='Find...' onChange={handlerCHange} value={valueSearch}/>
  )
}

export { TodoSearch }