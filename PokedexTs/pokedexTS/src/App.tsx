import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <h2 style={{textAlign: "center"}}> Pokemon List</h2>
    </>
  )
}

export default App
