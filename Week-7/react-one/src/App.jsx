import { BrowserRouter , Routes , Route , useNavigate } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
function App() {

  return (
    <>
    {/* <button onClick={()=>{window.location.href="/"}}>Landing</button>
    <button onClick={()=>{window.location.href="/Dashboard"}}>Dashboard</button> */}
    {/*Hot reloading the website by using the above function  */}
    {/* Now by using useNavigate() hook for client side routing */}
   

    <BrowserRouter>
    <Buttons/>
    <Routes>
      <Route path = "/dashboard" element = {<Dashboard/>}/>
      <Route path = "/" element = {<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

function Buttons()
{ 
  const navigate = useNavigate()
  return(
  <div>
  <button onClick={()=> navigate('/')}>Landing</button>
  <button onClick={()=> navigate('/dashboard')}>Dashboard</button>
  </div>)
}
export default App
