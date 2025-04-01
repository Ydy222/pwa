const obj1 = {};
const obj2 = new Object();

// console.log(obj1);
// console.log(obj2);

// 3월1일 3월2일 3월3일 토일월
// 17. 생성자 함수에 의한 객체 생성
function aa(){
    console.log(this);
}

// {} 객체가 생성이 된다
const aa1 = new aa();
// console.log(aa1);

const aa2 = aa();
// console.log(aa2);