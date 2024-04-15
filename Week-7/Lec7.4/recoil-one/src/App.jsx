import { jobAtom, mssgAtom, networkAtom, notifAtom , totalValueSelector } from "./atoms"
import {useRecoilValue , RecoilRoot} from "recoil"
function App() {


  return (
    <RecoilRoot>
    <MainRoot></MainRoot>
    </RecoilRoot>
  )
}

function MainRoot()
{ const networkAto = useRecoilValue(networkAtom)
  const jobAto = useRecoilValue(jobAtom)
  const mssgAto = useRecoilValue(mssgAtom)
  const notifAto = useRecoilValue(notifAtom)
  const totalValue = useRecoilValue(totalValueSelector)
 
 return( 
 <>
 <button>Home </button>
  <button>Network  {networkAto}</button>
  <button>Jobs  {jobAto}</button>
  <button>Messaging  {mssgAto}</button>
  <button>Notifications {notifAto}</button>
  <button>Me {totalValue}</button>
 </>
  )
}
export default App
