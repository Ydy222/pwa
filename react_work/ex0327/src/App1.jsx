import React, { useState } from 'react'
import CC from './components/CC'

function App1() {

    const [style, setStyle] = useState({
        border: "1px solid rgb(100,100,200)",
        borderRadus: '20px',
        padding: "30px",
        color: "rgb(30,30,30)",
        backgroundColor: "rgba(100,200,100,0.3)"
    })

    return (
        <>
            <div>
                <h1>App1</h1>
                <button onClick={() => setStyle({ ...style, color: "blue" })}>파란색으로</button>
                <button onClick={() => setStyle({ ...style, color: "red" })}>빨강색으로</button>
                <button onClick={() => setStyle({ ...style, color: "white" })}>하얀색으로</button>
            </div>
            <CC style={style}>
                <h1>자식태그111</h1>
                <p>Lorem ipsum dolor sit amet consectetur </p>
            </CC>
            <CC style={style}>
                <h1>자식태그222</h1>
                <p>g elit. Ipsum, maxime quidem. Ipsum possimus, repellat pariatur exercitationem dignissimos, consectetur fugiat, nam explicabo earum sunt totam fuga voluptatem fugit vitae sint. Fugit.</p>
            </CC>
            <CC style={style}>
                <h1>자식태그333</h1>
                <p>Loicing elit. Ipsum, maxime quidem. Ipsum possimus, repellat par</p>
            </CC>
        </>
    )
}

export default App1