import TodoItem from './TodoItem'
import React from 'react'
import { useAppState } from './context/AppContext'

const TodoList = () => {
  const { todos } = useAppState()
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  )
}

export default TodoList
