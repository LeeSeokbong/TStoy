import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoInterface } from './interfaces';


function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  function createTodoList(todo: TodoInterface) {
    const newTodosList: TodoInterface[] = [ ...todos ];
    newTodosList.push(todo);

    setTodos(newTodosList);
  }

  return (
    <div>
      <TodoForm
        todos={todos}
        createTodoList={createTodoList}
      />

      <TodoList
        todos={todos}
      />
    </div>
  );
}

export default App;