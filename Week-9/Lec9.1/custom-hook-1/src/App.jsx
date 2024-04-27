import { useState , useEffect} from 'react'
import axios from 'axios'
function useTodos()
{
  const [todos,setTodos] = useState([])
  useState([])
  useEffect(()=>{
   axios.get("https://sum-server.100xdevs.com/todos")
   .then(res=>{
    setTodos(res.data.todos)
   })
   
  },[])
  return todos
}
function App() {
  const todos = useTodos()

function Todo()
{
  return(
    <div>
      {todos.map(todo => <InsideTodo todo={todo}/>)}
    </div>
  )
}
function InsideTodo({todo})
{
  return(
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      </div>
      )
}

  return (
    <>
  <Todo />
    </>
  )
}

export default App
