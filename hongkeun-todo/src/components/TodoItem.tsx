import * as React from 'react';
import { TodoItemInterface } from '../interfaces';

const TodoItem = (props: TodoItemInterface) => {
  const { todo, onRemoveTodoClick } = props;

  return (
    <div>
      <div>
        {todo.isCompleted ? (
          <span>v</span>
        ) : (
          <span/>
        )}
      </div>

      <div>
        <input
          value={todo.text}
        />
        <span onClick={() => onRemoveTodoClick(todo.id)}>
          x
        </span>
      </div>
    </div>
  );
}

export default TodoItem