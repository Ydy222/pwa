import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(props) {
  return <h1>header{props.title}</h1>
}

function Footer() {
  return <><div><h1>footer</h1></div><div><h1>footer</h1></div></>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="제목제목"></Header>
      <h1>중간내용은 변경</h1>
      <Footer></Footer>
    </>
  )
}

export default App
