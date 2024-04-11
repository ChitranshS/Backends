import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function App() {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos)
    })
  },[])

  return (
    <>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}/>  
      })}
    </>
  )
}
function Todo({title,description})
{
  return(
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default App
