function outer() {
    let a = 0;
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!" + (a++)), 1000);
    });
}

const res = outer();
console.log(res);

// const res = await outer();
// console.log(res);

// outer().then(res => {
//     console.log(res);
// })

