import { useState } from 'react'
import './App.css'
import BB from './BB';

// javascript 2달
// react 3주 문법은 다 깨달았다
// react + supabase 예약을 하고 나면.. 관리자 3주

class AA {

}

function CC() {
  return (
    <div><h1>CC</h1></div>
  )
}

function App() {
  const [aa, setAA] = useState('useStateAA');
  const doClick = () => setAA(aa + "!!");

  const test = "안녕하세요 test입니다";

  return (
    <>
      <CC className=""></CC>
      <CC></CC>
      <CC></CC>
      <BB></BB>
      <BB></BB>
      <BB></BB>
      <h2 className='title'>{test}</h2>
      <h1 id='aa'>안녕 {aa}</h1>
      <button onClick={doClick}>버튼</button>
    </>
  )
}

export default App
