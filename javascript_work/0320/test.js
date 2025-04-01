function solution(arr) {
    const result = Math.min(...arr)
    const index = arr.indexOf(result);
    arr.splice(index, 1);
    var answer = arr;
    if(answer.length ==0) return [];
    return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));