import { useState } from "react"
function App() {
  const [count,changeCount] = useState(0)
  function update()
  {
    changeCount(count+1)
  }
  return (
    <div>
      <button onClick={update}>
        hi there the count is {count}
      </button>
    </div>
  )
}

export default App
