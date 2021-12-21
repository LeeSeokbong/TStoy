import React from 'react'
import TodoContainer from './TodoContainer'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { AppProvider } from './context/AppContext'
//TODO: mockdata로 비동기로 받아와서 해보면 좋을듯, + 리액트쿼리도?

function App() {
  return (
    <AppProvider>
      <TodoContainer>
        <TodoForm />
        <TodoList />
      </TodoContainer>
    </AppProvider>
  )
}

export default App
