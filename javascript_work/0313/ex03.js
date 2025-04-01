// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 4));
// console.log(arr.slice(2, 3));

function aa(a, b, c) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    // Array.prototype.slice 함수 호출
    const arr = Array.prototype.slice.call(arguments, 1, 3);
    arr.forEach(element => {
        console.log(element);
    });
    console.log(this);
}
// 일반함수로서의 호출 전역객체this
// aa();

const obj = { aa: 10, bb: 20 }
// aa.apply(obj, [10, 20, 30]);
// aa.call(obj, 10, 20, 30);
aa.bind(obj)();