import { Todo } from './types'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}
const TodoList = ({ todos }: Props) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  )
}

export default TodoList
