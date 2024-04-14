import { useRef } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {  todosAtom } from "./store/atoms/todosAtoms"
import { filterAtom } from "./store/atoms/todosAtoms"
import { filterTodos } from "./store/atoms/todosAtoms"
// Goal is to create a todo application using recoil
function App() {

  return (
    <>
    <RecoilRoot>
      <AddTodo></AddTodo>
      <Filter></Filter>
      <ShowTodo></ShowTodo>
      </RecoilRoot>
    </>
  )
}
function AddTodo()
{
  const inputRef = useRef()
  const descRef = useRef()
  const [todoAtom,todoAtomState] = useRecoilState(todosAtom)
  return(
  <>
  <input type="text" ref = {inputRef} placeholder="todo" style={{margin:"10px",padding:"10px"}}/>
  <br/>
  <input type="text" ref = {descRef} placeholder="desc" style={{margin:"10px",padding:"10px"}}/>
  <button onClick={()=>
  {
    todoAtomState([...todoAtom,{todo:inputRef.current.value,desc:descRef.current.value}])
    console.log(todoAtom)
  }}>Submit</button><br/>
  </>
  
  )
}
function Filter ()
{  const inputRef = useRef()
   const setFilter = useSetRecoilState(filterAtom)
  return(
    <>
  <input type="text" ref = {inputRef} placeholder="filter"  style={{margin:"10px",padding:"10px"}}/>
  <button onClick={()=>{
    setFilter(inputRef.current.value)
  }}>Filter</button>
  </>
  )
}

function ShowTodo()
{
  const filteredTodos = useRecoilValue(filterTodos)
  return (<div>
    {filteredTodos.map((todo)=>{return <><h1>{todo.todo}</h1><br/><p>{todo.desc}</p></>})}
  </div>)
}
export default App
