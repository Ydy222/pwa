// 문자열string 을 자바스크립트 object 로 변경 예시

// string -> object
// sessionStorage localStorage 사용할때 
// JSON.parse()사용..
const aa = '{ "a":"10", "b":"20" }';

// console.log(aa.a);

const obj = JSON.parse(aa);
console.log(obj.a);
console.log(obj.b);

// obejct -> String 변경할때는
// JSON.stringify() 사용

// object객체를 넣을수 없습니다.
// sessionStorage.setItem("obj", JSON.stringify(obj));
