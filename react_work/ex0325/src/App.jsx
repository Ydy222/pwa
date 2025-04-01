import { useState } from 'react';
import './App.css';
import User from './user';
import TextInput from './TextInput';

// function doA(item) {
//   return [item, function () { }];
// }


function App() {
  // const [a, setA] = doA(10);
  // count 변수는 useState를 사용했기때문에 setCount 값을 변경할시 화면 재랜더링
  const [count, setCount] = useState(0);

  // 일반변수이기때문에 화면 변경이 없음.
  let test = 0;

  // 이것도 일반변수
  const [mystyle, mm] = useState({ border: '1px solid black' });
  // const $h1 = document.getElementById('test-h1');
  // $h1.innerHTML = "변경";

  const func = () => {
    test = 20;
    console.log(test);
    setCount(count + 20);

    mm({ border: '1px solid black', backgroundColor: `rgb(100,200,${count})` })
  };

  return (
    <>
      <TextInput/>
      <User/>
      <h1>count = {count}</h1>
      <h1 id='test-h1'>test = {test}</h1>
      <button style={mystyle} onClick={func}>누름</button>
    </>
  )
}

export default App
