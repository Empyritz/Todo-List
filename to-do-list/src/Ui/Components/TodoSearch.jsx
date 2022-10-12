import React from 'react';
import './Css/todoSearch.css';
import { PropTypes } from 'prop-types';

function TodoSearch({ setValueSearch, valueSearch, loading }) {
  const handlerCHange = (e) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  return (
    <input
      type="text"
      className="TodoSearch"
      placeholder="Find..."
      onChange={handlerCHange}
      value={valueSearch}
      disabled={loading}
    />
  );
}

TodoSearch.propTypes = {
  setValueSearch: PropTypes.func.isRequired,
  valueSearch: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TodoSearch;
