import {useEffect, useRef, useState} from 'react';
import './App.css';
import Child from "./components/Child.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [aa, setAa] = useState(10);

    // 1. input창을 focus 하거나 값을 설정 하는 용도로 사용가능
    const myRef = useRef(null);

    // 2. 값을 가지고 있는 용도로도 사용가능
    const aRef = useRef(0);

    let a = 10;

    // 최초에 한번만 로딩된다.
    // aa 가 변경되면 또 호출해라
    useEffect(() => {
        console.log("부모 useEffect");
    }, [aa])

    return (
        <>
            <input type="number" ref={myRef}/>
            <button onClick={() => {
                console.log(myRef);
                myRef.current.focus();
                console.log(myRef.current.value);
            }}>포커스감
            </button>

            <button onClick={() => {
                a = a+1;
                console.log(`a ${a}`);
                console.log(aRef);
                aRef.current = aRef.current + 1;
            }}>ref변경 aRef={aRef.current}</button>

            <Child count={count}></Child>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <button onClick={() => setAa((aa) => aa + 1)}>
                aa is {aa}
            </button>
        </>
    )
}

export default App
