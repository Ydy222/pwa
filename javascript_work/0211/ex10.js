const a = [1, 50, 100, 70, 10, 200];

var answer = a[0];
for (let i = 1; i < a.length; i++) {
    // console.log(a[i]);
    if (answer < a[i]) {
        answer = a[i];
    }
}

console.log(answer);

const ret = Math.max(...a);
console.log(ret);

console.log(a);
console.log(...a);

const [k,y,z,qq] = [...a];
console.log(k);
console.log(z);
console.log(z);









