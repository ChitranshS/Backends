import { useState } from "react"
import { useMemo } from "react"
function App() {
  const [count,setCount] = useState(0)
  const [input,setInput] = useState(0)

  let sum = useMemo(()=>{
    let Finalsum = 0
    for(let i=1;i<=input;i++)
    {
      Finalsum = Finalsum+i
    }
    return Finalsum
  },[input]) 

  return (
    <>
     <input type="text" onChange={(e)=>setInput(e.target.value)} />
     <div>Sum is  {sum}</div>
     <button onClick={()=> {
      setCount(count+1)
     }}>Counter {count}</button>
    </>
  )
}

export default App
