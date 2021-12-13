import * as React from 'react';

const TodoItem = (props: any) => {
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