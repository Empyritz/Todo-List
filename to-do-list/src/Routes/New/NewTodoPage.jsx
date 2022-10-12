import React from 'react';
import TodoForm from '../../Ui/Components/TodoForm';
import useTodos from '../useTodos';

function NewTodoPage() {
  const { addTodo } = useTodos();

  return (
    <TodoForm
      label="Escribe tu nuevo TOOD"
      submitText="Añadir"
      placeholder="Llorar con la llorona"
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export default NewTodoPage;
