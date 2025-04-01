
// 순수함수
function doA(n){
    return ++n;
}

const count = doA(3);
console.log(count);

// 비순수함수
var n=3;
function doB(){
    n++;
}
doB();
console.log(n);

