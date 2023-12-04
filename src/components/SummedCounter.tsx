type ISummedCounter = {
  //   summedCounter: () => void
  title: string
}

export function SummedCounter({ title }: ISummedCounter) {
  console.log('Render SummedCounter')

  return (
    <>
      <p>{title}</p>
      {/* <button onClick={summedCounter}>Sum Counter</button>) */}
    </>
  )
}
