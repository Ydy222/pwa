function solution(nums) {
    const myset = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = 1; j < nums.length - 1; j++) {
            for (let k = 2; k < nums.length; k++) {
                if (i != j && j != k && k != i) {
                    // 3 5 7 9 11 13 17
                    const testValue = nums[i] + nums[j] + nums[k];
                    console.log(`nums[i] ${nums[i]}`);
                    console.log(`nums[j] ${nums[j]}`);
                    console.log(`nums[k] ${nums[k]}`);
                    console.log(`testValue ${testValue}`);
                    if (isPrime(testValue))
                        myset.add(testValue);
                }
            }
        }
    }
    return myset.size;
}
const primes = [2, 3];

// 2 3 5 7 9 11 13 17 
// 소수로 나누었을때 0 떨어지는 상황이면 소수가 아니라는 판별
function isPrime(item) {
    if (primes.includes(item)) return true;
    // 2 4 6 8 10 이런 상황은 다 소수가 아닙니다.
    for (const element of primes) {
        console.log(`element ${element}`)
        if (item % element == 0) return false;
    }
    primes.push(item);
    return true; // 소수맞다..
}

// 소수 1과 자기자신으로 나누었을때 0 이 되는 소수
// 2 3 5 7 11 13 17 

// i = 0 j =1 k= 2~3
// i = 0 j =2 k= 2~3
// i = 0 j =3 k= 2~3
// i = 1 j =1 k= 2~3
// i = 1 j =2 k= 2~3
// i = 1 j =3 k= 2~3
// i = 2 j =1 k= 2~3


console.log(solution([1, 2, 3, 4])) // 1
// 2 + 3 + 4  = 9
// console.log(solution([1, 2, 7, 6, 4])) // 4