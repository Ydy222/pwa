function doArr(arr, callback) {
    console.log(arr);
    console.log(callback);
    arr.forEach(item => {
        callback(item);
    })
}

doArr([1, 2, 3], function (item) {
    console.log("test " + item);
});