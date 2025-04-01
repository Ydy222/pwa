// 모든 요소에 2를 곱하고 짝수들의 총합을 구해라

const numbers = [1, 2, 3, 4, 5, 6];

const result =
    numbers.map(item => item * 2)
        .filter(item => item % 2 == 0)
        .reduce((acc, num) => acc + num);
console.log(result);


// 2 4 6 8 10 12
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * 2;
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         sum = sum + numbers[i];
//     }
// }

// console.log(sum);