import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([
    {
    title:"todo 1",
    description:"description of todo 1",
    completed:false
  },
  {
    title:"todo 2",
    description:"description of todo 2",
    completed:true
  }
])
  function addTodo()
  {
    setTodos([...todos,{
      title:`todo ${todos.length+1}`,
      description:`description of todo ${todos.length+1}`,
      completed:false
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add random todo's</button>
      
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}/>
    })}
    </div>
  )
}

//component
function Todo(props)
{
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
