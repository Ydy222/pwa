import React, { useState } from 'react'
import DD from './components/DD'

function App2() {

    const [count, setCount] = useState(0);
    console.log("App2 랜더링됨");

    const style = {
        border: "1px solid rgb(100,100,200)",
        borderRadus: '20px',
        padding: "30px",
        color: "rgb(30,30,30)",
        backgroundColor: "rgba(100,200,100,0.3)"
    }

    // ctrl + d 같은 문자 선택
    // ctrl + e 다른 판일로 변경
    return (
        <>
            <button onClick={() => { setCount(count + 1); }}>랜더링 이루어짐</button>
            <div>
                <h1>App1</h1>
            </div>
            <DD style={style}>
                <h1>자식태그111</h1>
                <p>Lorem ipsum dolor sit amet consectetur </p>
            </DD>
            <DD style={style}>
                <h1>자식태그222</h1>
                <p>g elit. Ipsum, maxime quidem. Ipsum possimus, repellat pariatur exercitationem dignissimos, consectetur fugiat, nam explicabo earum sunt totam fuga voluptatem fugit vitae sint. Fugit.</p>
            </DD>
            <DD style={style}>
                <h1>자식태그333</h1>
                <p>Loicing elit. Ipsum, maxime quidem. Ipsum possimus, repellat par</p>
            </DD>
        </>
    )
}

export default App2