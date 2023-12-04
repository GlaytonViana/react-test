import { memo, useState } from 'react'

type ISquare = {
  summedCounter: () => void
}

function Square({ summedCounter }: ISquare) {
  const [color, setColor] = useState<'red' | 'blue'>('red')

  const handleChangeColor = () => {
    setColor(color === 'red' ? 'blue' : 'red')
  }

  console.log('Render Square')

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <div
        style={{
          background: color,
          width: 40,
          height: 40,
        }}
      ></div>
      <div>
        <button onClick={handleChangeColor}>Change Color</button>
      </div>
      <div>
        <button onClick={summedCounter}>Sum Counter + 1</button>
      </div>
      <p style={{ width: 600 }}>
        O Square somente renderiza quando seu <i>state</i> interno é alterado, a alteração pelo componente pai passa
        pela verificação do memo. O memo pode ser mais lento do que o fluxo normal do react. Ideal para componentes
        puros ( <i>Sem interferência de dados ou libs externas</i> ) ou componentes de médio para grandes
      </p>

      <p style={{ width: 600 }}>
        O Square vai comparar a prop <i>summedCounter</i>, faz se necessário que essa função esteja com{' '}
        <i>useCallback</i> para que a posição da memória seja a mesma, e ela passe pelo algorítimo de comparação{' '}
        <i>Shallow Compare</i>{' '}
      </p>
    </div>
  )
}

export const MemoSquare = memo(Square)
