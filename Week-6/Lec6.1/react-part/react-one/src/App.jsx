import { Header } from "./components/Header"
import { useState } from "react"
function App() {
    const [title,setTitle] = useState("Testing1")
    function update()
    {
      setTitle(Math.random())
    }
  return (
    <div>
      <button onClick={update}>Click here</button>
      <Header title={`The title is ${title} `}></Header>
      <Header title="The title is Testing2"></Header>
      <Header title="The title is Testing3"></Header>
      <Header title="The title is Testing4"></Header>
      <Header title="The title is Testing5"></Header>
      <Header title="The title is Testing6"></Header>
    </div >
  )
}
export default App
