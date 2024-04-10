import { Header } from "./components/Header"
import { useState } from "react"

function App() {
 
  return (
    <div>
      
      <HeaderOne></HeaderOne>
      <Header title="The title is Testing2"></Header>
      <Header title="The title is Testing3"></Header>
      <Header title="The title is Testing4"></Header>
      <Header title="The title is Testing5"></Header>
      <Header title="The title is Testing6"></Header>

    </div >
  )
}
function HeaderOne()
{
  const [title,setTitle] = useState("Testing1")
  function update()
  {
    setTitle(Math.random())
  }
  return(<div>
    <button onClick={update}>Click to test</button>
    <br></br>
    The title is {title}
  </div>)
  
}
export default App
