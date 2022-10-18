import React from 'react';
import PropTypes from 'prop-types';

function TodoHeader({ children, loading }) {
  return (
    <header>
      {React.Children
        .toArray(children)
        .map((child) => React.cloneElement(child, { loading }))}
    </header>
  );
}

TodoHeader.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TodoHeader;
