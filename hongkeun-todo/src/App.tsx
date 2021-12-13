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

  function onRemoveTodoClick(id: number) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);

    setTodos(newTodosState);
  }

  return (
    <div>
      <TodoForm
        todos={todos}
        createTodoList={createTodoList}
      />

      <TodoList
        todos={todos}
        onRemoveTodoClick={onRemoveTodoClick}
      />
    </div>
  );
}

export default App;