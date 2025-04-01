import React from 'react'

function BB({ addCount, subCount }) {
    return (
        <>
            <div>BB</div>
            <h1>자식컴포넌트에서도 변경가능</h1>
            <button onClick={addCount}>누름</button>
            <button onClick={subCount}>누름</button>
        </>
    )
}

export default BB