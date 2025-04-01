const a = 100;
const b = '100';

console.log("a===b는 ?");
console.log(a===b);

// 개발자 2009년도..
// var 2014.. let const 

// rgb(255,255,255)
// #ffffff
// (16진수)ff = (10진수)255

console.log(10/0);
console.log(2*'string');

const c = 10;
const C = `20`;

console.log(c);
console.log(C);

function aa(){
  console.log(this);
  function bb(){
    console.log(this);
  }
  bb();
}
aa();