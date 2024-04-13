import { BrowserRouter , Routes , Route , useNavigate } from 'react-router-dom'
import { lazy ,Suspense} from 'react'
const   Dashboard = lazy(()=> import ('./components/Dashboard'))
const   Landing = lazy(()=> import ('./components/Landing'))
function App() {

  return (
    <>

    <BrowserRouter>
    <Buttons/>
    <Routes>
      <Route path = "/dashboard" element = {<Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}/>
      <Route path = "/" element = {<Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}/>
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
