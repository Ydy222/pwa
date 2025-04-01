/*
머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 
아이스 아메리카노는 한잔에 5,500원입니다. 
머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 
머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을
순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

 money	result
 5,500	[1, 0]
 15,000	[2, 4000]
*/
function solution(money) {
    var answer = [];   // answer[count, 남은돈]
    var price = 5500; // 한잔의 가격
    var count = 0;    // 주문한 잔의 수
    while (true) {
        if (money < price * count) {
            answer[0] = count-1;
            answer[1] = money - (price * (count-1));
            break;
        }
        count++;
        console.log(price*count);
    }
    return answer;
}

console.log(solution(5500));
console.log(solution(15000));