import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Todo } from '../types'
import { todoData } from '../data/todos'

interface AppContextType {
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
}
const AppContext = createContext<AppContextType | null>(null)
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(todoData)

  const value = {
    todos,
    setTodos,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useAppState = () => {
  const state = useContext(AppContext)

  if (state == null) {
    throw new Error('Cannot find AppContext')
  }

  return state
}

export { AppProvider, useAppState }
