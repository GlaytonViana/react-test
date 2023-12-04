import { useMemo, useState } from 'react'

export function Sum() {
  const [items] = useState([1, 2, 3])

  const result = useMemo(() => {
    console.log('function with useMemo')
    return items.reduce((acc, item) => (acc += item), 0)
  }, [items])

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <p>{result}</p>

      <p>
        O use memo salva o valor, e somente refaz o cálculo, caso o <i>state</i> passado no array de dependência sofra
        alteração{' '}
      </p>
    </div>
  )
}
