import { useContext } from 'react'
import { Context } from '../contexts/Context'

export function Counter() {
  const { counter, handleCounter } = useContext(Context)

  console.log('Render Counter')

  return (
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
        O contador vem de um contexto, como a mensagem está no mesmo contexto e é um <i>state</i> ela também renderiza{' '}
      </p>
    </div>
  )
}
