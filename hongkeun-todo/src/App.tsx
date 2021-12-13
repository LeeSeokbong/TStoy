import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoInterface } from './interfaces';


function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  return (
    <div>
      <TodoForm
        todos={todos}
      />

      <TodoList
        todos={todos}
      />
    </div>
  );
}

export default App;