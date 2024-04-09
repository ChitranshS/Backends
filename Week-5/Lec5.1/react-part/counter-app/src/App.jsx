import { useState } from "react"
function App() {
  const [count,changeCount] = useState(0)

  return (
    <div>
      <CustomButton count={count} changeCount={changeCount}/>
      <CustomButton count={count} changeCount={changeCount}/>
    </div>
  )
}
// components
function CustomButton(props)
{
  function update()
  {
    props.changeCount(props.count+1)
  }
  return <button onClick={update}>
    Counter is {props.count}
  </button>
}

export default App
