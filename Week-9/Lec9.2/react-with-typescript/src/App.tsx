import './App.css'

function App() {

  return (
    <>
    <Todo title="t1" desc = "d1" done ={false}/>
    </>
  )
}
interface TodoInterface {
  title:string
  desc:string
  done:boolean
}
// type TodoType = {
//   title:string
//   desc:string
//   done:boolean 

// }
function Todo (props : TodoInterface)
{
 return( 
 <div>
 <h1>{props.title}</h1> 
  <p>{props.desc}</p>
  </div>
 )
}

export default App
