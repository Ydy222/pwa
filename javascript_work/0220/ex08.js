// reduce -> 한개로 줄여서 반환...

// acc 1 num 2
// acc undefined num 3
// acc undefined num 4
// acc undefined num 5

// acc 1 num 2
// acc 10 num 3
// acc 10 num 4
// acc 10 num 5


// acc 1 num 2
// acc 3 num 3
// acc 6 num 4
// acc 10 num 5
// result 15

// 1,2,3,4,5 = 15

const result = [1, 2, 3, 4, 5].reduce((acc, num) => {
    console.log(acc);
    console.log(num);
    return acc + num;
});

console.log(result);