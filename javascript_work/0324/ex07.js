function doA(...arr) {
    console.log(arr);

    // const sum = arr.reduce((a, b) => {
    //     console.log('a=' + a);
    //     console.log('b=' + b);
    //     // return a.b = b;
    //     return a + b;
    // }, "");
    // console.log(sum);

    return arr.reduce((a, b) => {
        return a + b;
    }, "")
}

console.log(doA(1, 2, 3, 4, 5));