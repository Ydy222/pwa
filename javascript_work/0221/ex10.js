var x = 5;
function foo(){
    console.log("전역공간 foo함수"+x)
}

function bar(){
    var x = 10;
    // function foo(){
    //     console.log("bar 함수안에 foo함수"+x);
    // }
    foo();
}

bar();