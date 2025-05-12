import React, { useMemo, useState } from 'react';
import Header from '@/layout/Header';

function Calcu() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  const easyCalcu = (num) => {
    console.time('easy');
    console.timeEnd('easy');
    return num + 100;
  };

  const hardCalcu = (num) => {
    console.time('hard');
    for (let index = 0; index < 1_000_000_000; index++) {
      num += index;
    }
    console.log('오래걸리는 계산');
    console.timeEnd('hard');
    return hardNum;
  };

  // 관리자 react-router
  // a태그를 사용하지 않고 페이지동
  // chat gpt 

  // useState useEffect useRef useMemo
  
/* 
  문제
   1. 클릭 수를 세는 카운터 만들기 
      (증가, 감소, 리셋) -> sessionStorage 에 저장도 해보고..
   2. 나이계산 (생년월일 넣으면 현재 2025년 기준으로 만 몇살입니다)
*/ 

  // 성능개선 
  // useMemo 변수 hardNum이라는게 변경되면 자동호출
  // useCallback 함수 어떤게 변경되면 호출
  // Memo 컴포넌트가 변경되면 호출
  const hardSum = useMemo(() => {
    return hardCalcu(hardNum);
  }, [hardNum]);

  return (
    <div>
      <Header></Header>
      <h1>Calcu</h1>
      <div style={{ border: '1px solid black' }}>
        <p>hardCalcu = {hardSum}</p>
        <button onClick={() => setHardNum(hardNum + 10)}>어려운숫자증가</button>
      </div>
      <div style={{ border: '1px solid black' }}>
        <p>easyCalcu = {easyCalcu(easyNum)}</p>
        <button onClick={() => setEasyNum(easyNum + 5)}>쉬운숫자증가</button>
      </div>
    </div>
  );
}

export default Calcu;
