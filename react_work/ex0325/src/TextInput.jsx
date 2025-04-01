import React, { useState } from 'react'

export default function TextInput() {
    const [text, setText] = useState("초기값");
    const change = (event) => {
        // console.log(event);
        // 이렇게 해야지.. input 값 변경 가능...
        setText(event.target.value);
    }
    const amove = (event)=>{
        // a 태그의 기본동작은 페이지 이동입니다.

        // 기본동작을 막는다
        event.preventDefault();
        // 이벤트 두개 걸렸으면 작동안되게 막는거
        event.stopPropagation();
        console.log("a버튼 누름");
    }
    const doDiv = ()=>{
        console.log("div누르면 출력됨");
    }
    // onChange useState
    return (
        <div onClick={doDiv}>
            <h1>TextInput</h1>
            <input value={text} onChange={change} />
            <a href="http://www.naver.com" onClick={amove}>이동</a>
        </div>
    )
}
