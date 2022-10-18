import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import TodoForm from '../../Ui/Components/TodoForm';
import useTodos from '../useTodos';

function EditTodoPage() {
  const location = useLocation();
  const { editTodo, getTodo, loading } = useTodos();
  const { id } = useParams();
  const idNumber = Number(id);

  let todoText;

  if (location.state && location.state.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(idNumber);
    todoText = todo.text;
  }

  return (
    <TodoForm
      label="Editing..."
      defaultTodoText={todoText}
      submitText="Save"
      submitEvent={(text) => editTodo(idNumber, text)}
    />
  );
}

export default EditTodoPage;
