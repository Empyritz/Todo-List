import React from 'react';
import PropTypes from 'prop-types';

function EmptySearch({ valueSearch }) {
  return (
    <p>
      No hay resultados para &quot
      {valueSearch}
      &quot
    </p>
  );
}

EmptySearch.propTypes = {
  valueSearch: PropTypes.string.isRequired,
};

export default EmptySearch;
