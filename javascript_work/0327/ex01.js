const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 3));
console.log(arr.slice(2, 4));

function doA() {
    // const a = "10";
    // const b = a;

    // // 얕은 복사
    // const arr = [...arguments];
    // const brr = arr;

    // // 깊은 복사 es6 혁신 2015년도 
    // const crr = [...arr];
    // console.log('arr == brr');
    // console.log(arr == brr);
    // console.log('arr == crr');
    // console.log(arr == crr);

    // // es5
    // const drr = arr.slice();

    // html css -> javascript -> react -> node.js -> typescript -> next.js

    // forEach map filter reduce
    // map 새로운것을 리턴하게 되면 배열로 반환
    const result = [...arguments].map((item, index) => {
        console.log(item);
        console.log(`index = ${index}`);
        return `<div>item = ${item}<div>`;
    })
    // 화살표 함수에서 객체(=함수)가 리턴될때는 () 소괄호 사용
    const result1 = [...arguments].map((item, index) => (
        `<div>item = ${item}<div>`
    ));

    console.log(result);
    console.log(result1);
}

doA(1, 2, 3, 4, 5);