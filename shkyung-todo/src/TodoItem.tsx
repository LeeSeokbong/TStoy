import { Todo } from './types'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'

interface Props {
  todo: Todo
  setTodos: any
}
const TodoItem = ({ todo, setTodos }: Props) => {
  const { id, text, done } = todo

  const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.error('e : ', e.target.checked)
    setTodos((prev: any[]) =>
      prev.map((it) => {
        if (it.id === id) {
          it.done = e.target.checked
        }
        return it
      }),
    )
  }

  const onClickDelete = () => {
    setTodos((prev: any[]) =>
      prev.filter((it) => {
        return it.id !== id
      }),
    )
  }
  return (
    <div>
      {`할일: ${text}, 완료여부${done}`}
      <Checkbox defaultChecked={done} onChange={onChangeCheckBox} />
      <IconButton aria-label="delete" size="small" onClick={onClickDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  )
}

export default TodoItem
