function printArr(arr, callback) {
    // console.log(arr);
    // console.log(callback);
    for (let i = 0; i < arr.length; i++)
        callback(i, arr[i]);
}

printArr([1, 2, 3], function (index, item) {
    console.log("콜백함수 " + index + " item = " + item);
});