import React, { ChangeEvent, useRef, useState } from 'react'
import { Todo } from './types'

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoForm = ({ setTodos }: Props) => {
  const [text, setText] = useState('')
  const count = useRef(4)
  const addTodo = () => {
    const info: Todo = { id: count.current, text: text, done: false }
    setTodos((prev) => prev.concat([info]))
    setText('')
    count.current += 1
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        placeholder="할일을 입력하세요.."
        value={text}
        onChange={onChangeText}
      />
      <button onClick={addTodo}>등록</button>
    </>
  )
}

export default TodoForm
