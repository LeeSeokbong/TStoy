import React, { useRef, useState } from 'react';
import { TodoInterface, TodoFormInterface } from '../interfaces';


const TodoForm = (props: TodoFormInterface) => {
  const { todos, createTodoList } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState('');

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value);
  }

  function onInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      const newTodo: TodoInterface = {
        id: todos.length + 1,
        text: formState,
        isCompleted: false,
      }
      createTodoList(newTodo);

      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      };
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Enter new todo'
        ref={inputRef}
        onChange={event => onInputChange(event)}
        onKeyPress={event => onInputEnter(event)}
      />
    </div>
  );
}

export default TodoForm