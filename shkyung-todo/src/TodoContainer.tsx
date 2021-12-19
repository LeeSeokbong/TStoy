import React, { ReactNode } from 'react'

const TodoContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Todo Container</h1>
      {children}
    </div>
  )
}

export default TodoContainer
