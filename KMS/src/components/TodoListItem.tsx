import React from 'react';
import '../css/TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label htmlFor="a" className={todo.complete ? 'complete' : undefined}>
        <input type="checkbox" id="a" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
