function aaa(x, y) {
    // console.log(arguments);
    const iterator = arguments[Symbol.iterator]();
    let value;
    while( !(value = iterator.next().done )){
        console.log(value);
    }
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
}

aaa(10, 20, 30, 40);

// const arr = [10,20,30];
// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(Object.getOwnPropertyDescriptors(aaa));