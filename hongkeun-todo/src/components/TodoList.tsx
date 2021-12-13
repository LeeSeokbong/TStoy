import * as React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props: any) => {
  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map((todo: any) => (
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