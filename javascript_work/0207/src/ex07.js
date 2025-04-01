var a = null;

console.log(typeof a);

if (a === null) {
    console.log("참으로 판별");
}

console.log(typeof a === null)

var b = {a: 10, aa: 20};
console.log(b);

delete b.a;
console.log(b);

