import { useContext } from 'react'
import { Context } from '../contexts/Context'

export function Message() {
  const { message } = useContext(Context)

  console.log('Render Message')

  return <p>{message}</p>
}
