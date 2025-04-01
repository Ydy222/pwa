var x = 10;

function outer(){
    var x = 1;
    inner();
}

function inner(){
    var y = 2;
    console.log(x+y);
}


outer();