import React from 'react';
import { TodoFormInterface } from '../interfaces';


const TodoForm = (props: TodoFormInterface) => {
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