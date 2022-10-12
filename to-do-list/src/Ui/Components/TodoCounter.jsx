import React from 'react';
import './Css/todoCounter.css';
import PropTypes from 'prop-types';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>
      Has completado
      {completedTodos}
      {' '}
      de
      {totalTodos}
      {' '}
      TODOs
    </h1>
  );
}

TodoCounter.propTypes = {
  totalTodos: PropTypes.string.isRequired,
  completedTodos: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TodoCounter;
