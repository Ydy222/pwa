// 객체 분해
// function doA({ a, b }) {
//     console.log(a);
//     console.log(b);
// };

// doA({ a: 10, b: 20 });

// 배열 분해
// 왜 0을 부터 시작
// 배열 인덱스 0번 부터...
function doB([a, b, c], cc) {
    console.log(a);
    console.log(b);
    console.log(c);
    cc();
}

doB([10, 20, 30], function () { console.log("함수") });
