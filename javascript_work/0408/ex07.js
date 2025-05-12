// 37장 제너레이터 추가할때 좀더 쉬워짐...
// 자기자신이 말로 하면서 .. 글로 적어보는거
// 녹음... =>
const arr = [10, 20, 30, 40, 50]; // 메모리 5개로 바로 생성됨.
const myIter = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return {
          value: cur++, // for of 의 element로 됨.
          done: max < cur, // done 이 true가되면 for of 멈춤
        };
      },
    };
  },
};
// 객체안에 [Sysmbol.iterator] 메서드를 생성을하면
// 생성된 메서드는 객체를 리턴해야 하고
// 리턴된 객체 안에는 next() 함수가 생성되고
// next함수는 value와 done을 반환하는 객체
// for of 로 나열이 가능하다.
for (const element of myIter) {
  console.log(element);
}

const test = myIter[Symbol.iterator]();
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());

// Symbol.itrator => Array, map, set,

// prototype 체인에 symbol.itrator
const aaa = [10,20,30];
for (const element of aaa) {
    console.log(element);
}

// react -> 로또 vercel 
// react-router useNavigate