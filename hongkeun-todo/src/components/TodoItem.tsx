import * as React from 'react';
import { TodoItemInterface } from '../interfaces';

const TodoItem = (props: TodoItemInterface) => {
  const { todo } = props;
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
      </div>

      <div>
        x
      </div>
    </div>
  );
}

export default TodoItem