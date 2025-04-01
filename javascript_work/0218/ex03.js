// 모든 함수는 객체 입니다..
// add { name:add }
// const a = {name:"홍길동"}
// a.age = 20;
// a{name:홍길동, age:20}

function add(x, y) {
    console.log(x, y);
}

add.xx = 10;
console.log(add.name);
console.log(add.xx);