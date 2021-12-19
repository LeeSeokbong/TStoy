import { Todo } from './types'
import TodoItem from './TodoItem'
import React from 'react'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} setTodos={setTodos} />
      ))}
    </>
  )
}

export default TodoList
