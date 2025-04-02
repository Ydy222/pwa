import React, {useEffect} from 'react';
import './App.css';


function App1(props) {

    useEffect(() => {
        fetch("/api/common.do?method=getLottoNumber&drwNo=1165")
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }, []);
    return (
        <div>
            <div>버튼</div>
            <div className="title">로또 6/45</div>
            <div className="round">1165회 당첨결과</div>
            <div className="date">(2025-03-29 추첨)</div>
            <div className="numbers">
                <div className="ball yellow">6</div>
                <div className="ball yellow">7</div>
                <div className="ball red">27</div>
                <div className="ball red">29</div>
                <div className="ball green">38</div>
                <div className="ball yellow">45</div>
                <div className="plus-sign">+</div>
                <div className="ball blue">17</div>
            </div>
            <div className="result-box">
                <div>1등 총 당첨금</div>
                <div className="amount">285억원</div>
                <div className="sub">(13명 / 22억)</div>
            </div>
            <div className="buttons">
                <button className="btn btn-gray">회차별 결과</button>
                <button className="btn btn-green">구매하기</button>
            </div>
        </div>
    );
}

export default App1;