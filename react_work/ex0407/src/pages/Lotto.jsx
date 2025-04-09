import React, {useEffect, useRef, useState} from 'react';

function Lotto(props) {
    const [drwNo, setDrwNo] = useState(0);
    const [numbers, setNumbers] = React.useState([]);
    const [myNumbers, setMyNumbers] = React.useState([]);
    const inputRef = useRef(null);

    async function getMyNumbers() {
        // const arr = [...(new Array(6))].map(
        //     (_, i) => Math.trunc(Math.random() * 46) + 1
        // );
        // 중복을 허용하지 않는 set 배열 선언
        const arr = new Set();
        do {
            arr.add(Math.trunc(Math.random() * 46) + 1);
        } while (arr.size !== 6)

        console.log(arr)
        setMyNumbers([...arr]);
    }

    async function getNumbers() {
        // fetch(`/api/common.do?method=getLottoNumber&drwNo=${1163}`)
        //     .then(text => text.json())
        //     .then(json => setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6])));
        const inputValue = inputRef.current.value || 1166;
        console.log(inputValue);
        // 로또 서버에 가서 1166회차 가져와
        const text = await fetch(`/api/lotto?drwNo=${inputValue}`);
        // 가져왔는데이터 text -> json 바꿔줘
        const res = await text.json();
        // 바꿔준걸 출력해줘
        console.log(res);
        setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6]);
        setDrwNo(res.drwNo);
    }

    useEffect(() => {
        getNumbers();
    }, []);
    return (
        <div>
            <h1>LOTTO</h1>
            <h1>{drwNo}회</h1>
            <div>
                <input type="text" ref={inputRef}/>
            </div>
            <button onClick={getNumbers}>조회</button>
            <div style={{display: "flex", gap: "1rem"}}>
                {numbers.map(number => (
                    <div
                        style={{
                            lineHeight: '3.8rem',
                            textAlign: "center",
                            borderRadius: '50%',
                            backgroundColor: `rgb(100, 200, 255)`,
                            width: '4rem',
                            height: '4rem'
                        }}
                        key={number}>{number}</div>
                ))}
            </div>
            <button onClick={getMyNumbers}>추첨</button>
            <div style={{display: "flex", gap: "1rem"}}>
                {myNumbers.map(number => (
                    <div
                        style={{
                            lineHeight: '3.8rem',
                            textAlign: "center",
                            borderRadius: '50%',
                            backgroundColor: `rgb(100, 200, 255)`,
                            width: '4rem',
                            height: '4rem'
                        }}
                        key={number}>{number}</div>
                ))}
            </div>
        </div>
    );
}

export default Lotto;