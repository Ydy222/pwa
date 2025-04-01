import React, {useEffect, useRef, useState} from 'react';

function MyTime(props) {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    // const [interId, setInterId] = React.useState(null);

    const intervalRef = useRef(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 100);
            }, 100);
            console.log('타이머 시작');
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                console.log('타이머 멈춤');
            }
        }
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [running]);
    // 처음에 1번 호출이 되고 running이 변경 될때마다 호출이 됩니다.

    return (
        <div>
            <h1>타이머 {time}</h1>
            <button onClick={() => setRunning(true)}>시작</button>
            <button onClick={() => setRunning(false)}>멈춤</button>
            <button onClick={() => setTime(0)}>리셋</button>
        </div>
    );
}

export default MyTime;