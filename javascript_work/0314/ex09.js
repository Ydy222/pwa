function aa(){
    const aa = 10;
    console.log(aa);
    function a1(){
        console.log(aa);
    }
    a1();
}

// /a();

const counter = function (){
    let coun = 0;
    return function (callback){
        coun = callback(coun);
        console.log(coun);
        return coun;
    }
}();
const increase = function (num){
    return ++num;
}
const decrease = function (num){
    return --num;
}
console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));

console.log(counter(decrease));
console.log(counter(decrease));
console.log(counter(decrease));