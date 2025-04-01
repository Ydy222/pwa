function bar(func){
    return func();
}

function foo(){
    return `caller ${foo.caller}`;
}

console.log(bar(foo));
console.log('-----------------')
console.log(foo());