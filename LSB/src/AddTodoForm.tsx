import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

// eslint-disable-next-line import/prefer-default-export
export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};