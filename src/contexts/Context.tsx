import { ReactNode, createContext, useState } from 'react'

type IContext = {
  counter: number
  handleCounter: () => void
  message: string
}

export const Context = createContext({} as IContext)

export function ContextProvider({ children }: { children: ReactNode }) {
  const [counter, setCounter] = useState(0)
  const [message] = useState('Hello People')

  const handleCounter = () => {
    setCounter((current) => current + 1)
  }

  return <Context.Provider value={{ counter, handleCounter, message }}>{children}</Context.Provider>
}
