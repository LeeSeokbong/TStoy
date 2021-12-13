import * as React from 'react';
import { TodoItemInterface } from '../interfaces';

const TodoItem = (props: TodoItemInterface) => {
  const { todo, onRemoveTodoClick, onUpdateTodoChange, onCompleteTodoClick } = props;

  return (
    <div>
      <div onClick={() => onCompleteTodoClick(todo.id)}>
        {todo.isCompleted ? (
          <span>v</span>
        ) : (
          <span/>
        )}
      </div>

      <div>
        <input
          value={todo.text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onUpdateTodoChange(event, todo.id)}
        />
        <span onClick={() => onRemoveTodoClick(todo.id)}>
          x
        </span>
      </div>
    </div>
  );
}

export default TodoItem