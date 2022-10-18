import React from 'react';
import './Css/todoList.css';
import PropTypes from 'prop-types';

function TodoList({
  error, loading, totalTodos, searchedTodos, ...props
}) {
  // const { searchedTodos, completeTodo, deleteTodo } = useTodos()
  // console.log('TodoList');
  return (
    <section className="TodoList-container">
      <ul>
        {error && props.onError()}
        {loading && props.onLoading()}
        {(!loading && !totalTodos) && props.onEmptyTodos()}
        {(!!totalTodos && !searchedTodos.length) && props.onEmptySearch()}
        {!loading && searchedTodos.map((todo, index) => props.render(todo, index))}
        {/* {props.searchedTodos.map(props.render)} */}
      </ul>
    </section>
  );
}

TodoList.propTypes = {
  onError: PropTypes.func.isRequired,
  onLoading: PropTypes.func.isRequired,
  onEmptyTodos: PropTypes.func.isRequired,
  onEmptySearch: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  searchedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  totalTodos: PropTypes.number.isRequired,
};

TodoList.defaultProps = {
  error: false,
};

export default TodoList;
