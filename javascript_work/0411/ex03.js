let a, b;

[a, b] = [10, 20];

// b와 a값을 바꿔라...
[b, a] = [a, b];

console.log(`a ${a}`);
console.log(`b ${b}`);

let c = 40;
let d = 50;

// swap 방식 
let temp = c;
c = d;
d = temp;

console.log(c);
console.log(d);