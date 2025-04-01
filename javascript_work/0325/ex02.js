function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            // console.log('찾는 값의 인덱스는 ' + i);
            console.log(`찾는 값의 인덱스는 ${i}`);
        }
    }
}

linearSearch([10, 20, 30, 40], 30);

console.log(Object.getOwnPropertyDescriptors([10, 20, 30]));

const obj = {
    a: 10,
    b: 20,
}


console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));