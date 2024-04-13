import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'
import { countAtom } from './store/atoms/count'
import { useRecoilState , useRecoilValue ,RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
        <Count/>
    </RecoilRoot>
  )
}
function Count()
{

  return(
    <>
    <CountShow></CountShow>
    <Button></Button>
    </>
  )
  function CountShow()
  {
    const count = useRecoilValue(countAtom)
    return(
      <>
      <h1>{count}</h1>
      </>
    )
  }
}
function Button()
{  const [count,setCount] = useRecoilState(countAtom)
  return(
    <>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <button onClick={()=>setCount(count-1)}>decrease</button>
    </>
  )
}
export default App
