import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header({aa,bb}){
  return <>
    <div>
      <h1>header</h1>
      <p>aa = {aa}</p>
      <p>bb = {bb}</p>
    </div>
  </>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header aa={10} bb={20}/>
        <Header aa={11} bb={21}/>
        <Header aa={13} bb={23}/>
        <div>
          <h1>PMH</h1>
        </div>
    </>
  )
}

export default App
