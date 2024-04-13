import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
        </CountContext.Provider>
    </>
  )
}
function Count({setCount})
{

  return(
    <>
    <CountShow></CountShow>
    <Button setCount={setCount} ></Button>
    </>
  )
}
function Button({setCount})
{  const count = useContext(CountContext)
  return(
    <>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <button onClick={()=>setCount(count-1)}>decrease</button>
    </>
  )
}
function CountShow()
{
  const count = useContext(CountContext)
  return(
    <>
    <h1>{count}</h1>
    </>
  )
}
export default App
