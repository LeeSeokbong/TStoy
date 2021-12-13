import React, { useState } from 'react'
import TodoContainer from './TodoContainer'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
//TODO: mockdata로 비동기로 받아와서 해보면 좋을듯, + 리액트쿼리도?
import { todoData } from './data/todos'
import { Todo } from './types'

function App() {
  // TODO: 일단은 제일 기본적인 state와 props로 내려주지만 나중엔 context + reducer 조합 or 리코일 or 조타이
  const [todos, setTodos] = useState<Todo[]>(todoData)
  return (
    <TodoContainer>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoContainer>
  )
}

export default App
