/*
    1. 표준 빌트인객체 - 실행환경 상관없이 사용되어지는거
    Array,String,Boolean,Math

    2. 호스트 객체
    브라우저 - document
    node - process

    3. 사용자 정의객체
    - 개발자가 직접 만드는 객체
*/

// console.log(document);
// console.log(process);

// console.log(XMLHttpRequest);
// console.log(fetch);

// 여기 소스를 가지고 와라
// gpt 선임이 그거 수정해라..
// gpt ????
// 비동기적이기 때문에 then 을 사용하거나 await를 사용해야 합니다.
const response = await fetch('https://cjo3o.github.io/p2-jim/header.html')
    // // 가지고 왔는 소스를 string으로 변환해라
    // .then(response=>response.text())
    // // string으로 변환한것을 data 라는 변수에 넣어달라
    // .then(data=>{
    //     // data 안에 있는 소스 출력
    //     console.log(data);
    // })
console.log('test');