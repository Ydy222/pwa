import React from 'react'

// AA 컴포넌트
function AA({ aa, bb }) {

    // let aa = props.aa;
    // aa = 30;

    console.log("AA 렌더링 됨");

    // 리액트에서 리턴값 작성시는 한개의 tag로 해야함.
    return (
        <>
            <div>AA</div>
            {/* <h1>props.aa = {props.aa}</h1>
            <h1>props.bb = {props.bb}</h1> */}
            <h1>aa = {aa}</h1>
            <h1>bb = {bb}</h1>
        </>
    )
}

export default AA