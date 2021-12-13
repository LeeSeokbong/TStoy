import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoInterface } from './interfaces';


const initialTodoList = [
  {
    id: 1,
    text: 'create todo list',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'update todo list',
    isCompleted: true,
  },
];

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>(initialTodoList);

  function createTodoList(todo: TodoInterface) {
    const newTodosList: TodoInterface[] = [ ...todos ];
    newTodosList.push(todo);

    setTodos(newTodosList);
  }

  function onRemoveTodoClick(id: number) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);

    setTodos(newTodosState);
  }

  function onUpdateTodoChange(event: React.ChangeEvent<HTMLInputElement>, id: number) {
    const newTodosList: TodoInterface[] = [ ...todos ];
    newTodosList.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value;

    setTodos(newTodosList);
  }

  function onCompleteTodoClick(id: number) {
    debugger;
    const newTodosList: TodoInterface[] = [ ...todos ];
    console.log(newTodosList);
    debugger;
    newTodosList.map((todo: TodoInterface) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo );

    console.log(newTodosList);
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
        onRemoveTodoClick={onRemoveTodoClick}
        onUpdateTodoChange={onUpdateTodoChange}
        onCompleteTodoClick={onCompleteTodoClick}
      />
    </div>
  );
}

export default App;