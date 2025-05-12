import { useRef } from 'react';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Calcu from './components/Calcu';

{
  /* <App></App> */
  // alt + shift + f 자동정렬 할때 prettierrc에 의해서
  // 정렬됨
}
function App() {
  const aa = 'aabcd';
  let a = 10; // 10으로 초기화
  const useA = useRef(10); // 메모리상에 참조되는 값이 있으니 그걸 가져와라

  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    // console.log('useEffect 호출');
    handleClick();
    // inputRef.current.focus();
  });

  return (
    <>
      <Calcu />
      <h1>count = {count}</h1>
      <h1>a = {a}</h1>
      <h1>useA = {useA.current}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        카운트증가
      </button>
      <button
        onClick={() => {
          a = a + 1;
          useA.current = useA.current + 1;
          console.log(`a = ${a}`);
          console.log(`useA.current = ${useA.current}`);
        }}
      >
        a증가useA증가
      </button>
      <div>
        <input type="text" name="" id="" ref={inputRef} />
        <button onClick={handleClick}>포커스이동</button>
      </div>
    </>
  );
}

export default App;
