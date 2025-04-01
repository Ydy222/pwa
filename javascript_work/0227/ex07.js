const obj1 = {};    // 호출할수 없다. obj1();l
const obj2 = function(x,y,z){};  // 호출할수 있다. obj2();
console.log(`obj1.length ${obj1.length}`);
console.log(`obj2.length ${obj2.length}`);

const name = "홍길동";
const incr = function (num) {
    return ++num;
}
const decr = function (num) {
    return --num;
}

const auxs = { 
    name,
    incr, 
    decr 
};

function makeCounter(aux){
    let num = 0;
    return function (){
        // num = (function (num) { return ++num; })(num);
        num = aux(num);
        return num;
    }
}
const increaser = makeCounter( auxs.incr );
// const increaser = makeCounter( function (num) {return ++num;} );
// const increaser = (function makeCounter(aux){
//     let num = 0;
//     return function (){
//         num = (function (num) { return ++num; })(num);
//         return num;
//     }
// })();

console.log(increaser()); // 1
console.log(increaser()); // 2
console.log(increaser()); // 3

// console.log(increaser);
// console.log(`increaser ${increaser}`);

// console.log(incr(10));
// console.log(auxs.decr(10));