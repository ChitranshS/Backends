import { RecoilRoot , useRecoilValueLoadable , useRecoilValue} from 'recoil'
import { todoAtomFam } from './atoms'
import { Suspense } from 'react'
function App() {

  return (
    <>
    <RecoilRoot>
      <Todo id = {1}></Todo>
      <Todo id = {2}></Todo>
      <Todo id = {3}></Todo>
      <Todo id = {3}></Todo>
      <Todo id = {3}></Todo>
    </RecoilRoot>
    </>
  )
}
function Todo({id})
{
  const currentTodo = useRecoilValueLoadable(todoAtomFam(id))
  console.log(currentTodo)
  if (currentTodo.state== "loading")
  {
    <div>Loading....</div>
  }
  if (currentTodo.state == "hasValue")
  return (<div>
    {currentTodo.contents.description}
  </div>)
   if (currentTodo.state == "hasError")
   {
    return (<div>Some error has happened</div>)
   }
}


export default App
