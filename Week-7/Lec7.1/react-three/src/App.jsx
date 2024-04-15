// This is about prop drilling in react
import { useState } from 'react'
function App() {
  const [count,setCount] = useState(0)
  return (
    <>
    <Count count = {count} setCount={setCount}/>
    </>
  )
}
function Count({count,setCount})
{
 
  return <div>{count}
  <br>
  </br>
  <Buttons count = {count} setCount = {setCount}/></div>
}
function Buttons({count,setCount})
{
  return (
  <div>
  <button onClick={()=>setCount(count+1)}>increase</button>
  <button onClick={()=>setCount(count-1)}>decrease</button>
 </div>)
}

export default App
