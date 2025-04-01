const res1 = (a, b) => a + b;
const res2 = (a, b) => { return a + b };

console.log(res1(10, 20));
console.log(res2(10, 20));

const res3 = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        sum = sum + arr[i];
    }
    return sum;
}

const result = res3([10, 20, 30]);
console.log(result);