var x = 'global';

function foo(x){
    // var x = 'local';
    x = 'test';
    console.log(x);
}

foo(x);

console.log(x);