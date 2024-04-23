import { Header } from './components/Header'
import { RevenueCard } from './components/RevenueCard'

function App() {


  return (
    <>
    <Header></Header>
    <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3   '>
    <RevenueCard title={"Total amount"} orderCount={10} amount={92000}></RevenueCard>
    <RevenueCard title={"Amount Recieved"} orderCount={9} amount={82800}></RevenueCard>
    <RevenueCard title={"Pending"} orderCount={1} amount={9200}></RevenueCard>
    </div>
    </>
  )
}

export default App
