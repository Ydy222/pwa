import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Lotto from './pages/Lotto'
import MyPage from './pages/MyPage'


function Test(){
  return (<><h1>Test</h1></>)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test/>
      <Test/>
      <Test/>
      <h1>Vite + React</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/lotto' element={<Lotto/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
      </Routes>
      <div className="card">
        {/* setCount 화면 재랜더링해라 */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
