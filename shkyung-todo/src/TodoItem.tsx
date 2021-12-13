import { Todo } from './types'

const TodoItem = ({ todo }: { todo: Todo }) => {
  //TODO: checkbox, delete버튼
  const { id, text, done } = todo
  return <div>{`할일: ${text}, 완료여부${done}`}</div>
}

export default TodoItem
