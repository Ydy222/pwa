const uniq = [1, 3, 3, 5, 5].filter((v, i, self) => {
  console.log(`v = ${v}`);
  console.log(`i = ${i}`);
  console.log(`self = ${self}`);
  console.log("self.indexOf(v)");
  console.log(self.indexOf(v));
  return self.indexOf(v) == i; //1,3,3,5,5
});

//filter true 이면 요소반환O
//       false 이면 요소반환X

console.log(uniq);
console.log(new Set([1, 3, 3, 5, 5]));
