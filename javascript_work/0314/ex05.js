const x = 1;

function outerFunc() {
    const x = 10;
    // C# java
    innerFunc();
}


function innerFunc() {
    console.log(x);
}


outerFunc();