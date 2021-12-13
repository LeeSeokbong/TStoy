import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const initialTodos: Array<Todo> = [
  { id: '1', text: 'Walk the dog', complete: true },
  { id: '2', text: 'Write app', complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (!newTodo.trim()) {
      return;
    }

    setTodos([
      ...todos,
      { id: String(todos.length + 1), text: newTodo, complete: false },
    ]);
  };

  const deleteTodo: DeleteTodo = (deleteTodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteTodoId);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
