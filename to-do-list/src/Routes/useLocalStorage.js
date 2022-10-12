import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = (initialValue) => ({
  synchronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  succes: 'SUCCES',
  save: 'SAVE',
  update: 'UPDATE',
  edit: 'EDIT',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    synchronizedItem: true,
    item: payload,
    error: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.update]: {
    ...state,
    loading: true,
    synchronizedItem: false,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return { ...state };
};

// const reducer = (state, action) => {
//   reducerObject(state, action.payload)[action.type] || state;
// }

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));
  const {
    synchronizedItem,
    error,
    loading,
    item,
  } = state;

  // ACTION CREATORS
  const onError = (err) => { dispatch({ type: actionTypes.error, payload: err }); };
  const onSuccess = (parsedItem) => {
    dispatch({ type: actionTypes.success, payload: parsedItem });
  };
  const onSave = (newItem) => { dispatch({ type: actionTypes.save, payload: newItem }); };
  const onUpdate = () => { dispatch({ type: actionTypes.update }); };

  useEffect(() => {
    setTimeout(() => {
      try {
        const locaStorageItem = JSON.parse(localStorage.getItem(itemName));
        let parsedItem;

        if (!locaStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = locaStorageItem;
        }
        onSuccess(parsedItem);
      } catch (err) {
        onError(err);
      }
      // console.log('pasando por ahi')
    }, 1000);
  }, [initialValue, itemName, synchronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (err) {
      onError(err);
    }
  };

  const updateItem = () => {
    onUpdate();
  };

  return {
    item, saveItem, loading, error, updateItem,
  };
}

useLocalStorage.propTypes = {
  itemName: PropTypes.string.isRequired,
  initialValue: PropTypes.arrayOf(PropTypes.object),
};

useLocalStorage.defaultProps = {
  itemName: '',
  initialValue: [],
};

export default useLocalStorage;
