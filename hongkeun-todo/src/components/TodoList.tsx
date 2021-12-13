import * as React from 'react';
import TodoItem from './TodoItem';
import { TodoListInterface } from '../interfaces';

const TodoList = (props: TodoListInterface) => {
  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList