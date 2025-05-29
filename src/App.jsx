import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aicontainer from "./components/ai-container/ai-container"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aicontainer/>
    </>
  )
}

export default App
