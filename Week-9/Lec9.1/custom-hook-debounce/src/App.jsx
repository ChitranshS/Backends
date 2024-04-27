import { useEffect,useState } from "react"

function useDebounce(value,timeout)
{
  const [dvalue,setDValue] = useState(value)

  useEffect(()=>{

   const time = setTimeout(()=>{
    setDValue(value)
    },timeout)

    return()=>{
      clearTimeout(time)
    }
    
  },[value])
  return dvalue
}
function App() {

  const [value,setValue] = useState(0)
  const debouncedText = useDebounce(value,500)
  return (
    <>
    <div> The debounced text is {debouncedText} </div>
    <input onChange={(e)=>setValue(e.target.value)}></input>
    </>
  )
}

export default App
