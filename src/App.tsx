import { useCallback, useState } from 'react'
import './App.css'

import { Message } from './components/Message'
import { Counter } from './components/Counter'
import { ContextProvider } from './contexts/Context.tsx'
import { MemoSquare } from './components/Square.tsx'
import { Sum } from './components/Sum.tsx'
import { SummedCounter } from './components/SummedCounter.tsx'

function App() {
  const [counter, setCounter] = useState(0)
  const [summedCounter, setSummedCounter] = useState(0)

  const handleCounter = () => {
    setCounter((current) => current + 1)
  }

  const sumCounter = useCallback(() => {
    setSummedCounter((curr) => curr + 1)
  }, [])

  console.log('Render App')

  return (
    <ContextProvider>
      <main style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1>Testes de re-renderização</h1>
        <h2>Os estados devem estar sempre o mais próximo possívem do Componente</h2>

        <h3>Parent</h3>

        <div style={{ display: 'flex', gap: 8 }}>
          <div
            style={{
              display: 'flex',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #333',
            }}
          >
            <p>{counter}</p>
          </div>

          <button onClick={handleCounter}>Add counter</button>

          <p>
            O contador vem de um contexto, como a mensagem está no mesmo contexto e é um <i>state</i> ela também
            renderiza{' '}
          </p>
        </div>

        <h3>Components</h3>
        <Counter />
        <Message />
        <MemoSquare summedCounter={sumCounter} />
        {summedCounter}
        <Sum />

        <SummedCounter title="Teste" />
      </main>
    </ContextProvider>
  )
}

export default App
