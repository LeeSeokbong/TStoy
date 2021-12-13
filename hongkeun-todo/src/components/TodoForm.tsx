import React from 'react';

const TodoForm = (props: any) => {
  const { todos } = props;

  return (
    <div>
      <input
        type="text"
        placeholder='Enter new todo'
      />
    </div>
  );
}

export default TodoForm