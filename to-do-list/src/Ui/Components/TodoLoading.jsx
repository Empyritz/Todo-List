import React from 'react';
import './Css/todoLoading.css';

function TodoLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon" />
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon" />
    </div>
  );
}

export default TodoLoading;
