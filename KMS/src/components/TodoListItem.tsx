import React from 'react';
import '../css/TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label
        htmlFor={todo.id}
        className={todo.complete ? 'complete' : undefined}
      >
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
