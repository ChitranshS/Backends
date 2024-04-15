import { useEffect } from 'react'
import { RecoilRoot, useRecoilState , useRecoilValue} from 'recoil'
import { networkAtom, totalNotificationSelector } from './atoms'
import axios from 'axios'
function App() {

  return (
    <>
     <RecoilRoot>
<MainRoot/>
     </RecoilRoot>
    </>
  )
}
function MainRoot()
{ const networkData= useRecoilValue(networkAtom)
  const totalNotification = useRecoilValue(totalNotificationSelector)
 // Instead of using the axios call here we can define it inside the atom itself to get a default value
  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res=>{
  //     setNetwork(res.data)
  //   })
    
  // },[])

 return( 
 <>
 <button>Home </button>
  <button>Network  {networkData.network}</button>
  <button>Jobs  {networkData.jobs}</button>
  <button>Messaging  {networkData.messaging}</button>
  <button>Notifications {networkData.notifications}</button>
  <button>Me {totalNotification}</button>
 </>
  )
}
export default App
