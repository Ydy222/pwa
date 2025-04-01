// 양꼬치 n 12000원 음료수 k 2000원
// n k 임의의 숫자
// 양꼬치 10개 먹으면 음료수 한개 공짜

function solution(n, k) {
    var total = 0;

    // 12000원 꼽하기 n 하면 양꼬치값
    var 양꼬치값 = n * 12000;

    // 2000원 꼽하기 k 하면 음료수값
    var 음료수값 = k * 2000;

    // 양꼬치값 + 음료수값 = total
    total = 양꼬치값 + 음료수값;
    // 양꼬치 10개 할때마다 2000원씩 빼라..
    total = total - parseInt(n/10)*2000;

    return total.toLocaleString();
}

// 10 /10 = 1
const value1 = solution(10, 3);
console.log(value1); // 124,000

// 64 /10 = 6.4
const value2 = solution(64, 6);
console.log(value2); // 768,000