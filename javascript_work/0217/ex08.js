// const f = (x,y)=> x+y ; // 함수 몸체에 한줄만 가능
const f = (x,y)=> x = x + 10;
f(10); // 20 출력

 
 // 함수 몸체에 여러줄 가능

// if 문에서  생략가능하는 경우는 한줄...
// if (a==10) console.log(10);
// if 문에서 {} 두줄일경우

const res = f(10,20);
console.log(res);