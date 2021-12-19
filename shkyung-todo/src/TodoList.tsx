import { Todo } from './types'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
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
