// const sequ = function (length = 1) {
//     return Array.from({ length }, (_, i) => i);
// }

const sequ = (length = 1) => Array.from({ length }, (_, i) => i);

console.log(sequ(5));
console.log(sequ());
