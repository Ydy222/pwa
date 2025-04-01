/*문자열 리스트 str_list에는 "u", "d", "l", "r"
 네 개의 문자열이 여러 개 저장되어 있습니다. 
 str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 
 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 
 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 
 문자열들을 순서대로
  담은 리스트를 return하도록 solution 함수를 완성해주세요. 
  "l"이나 "r"이 없다면 빈 리스트를 return합니다.
*/
// const arr = [10, 20, 30, 40];

// console.log(arr.slice(0,3));
// console.log(arr.slice(1,3));
// console.log(arr.slice(1));
// console.log(arr.slice(2));
// console.log(arr.slice(0,2));


function solution(str_list) {
    let lindex = str_list.indexOf('l')    // 2
    let rindex = str_list.indexOf('r')    // 3

    if (lindex == -1) lindex = 21;
    if (rindex == -1) rindex = 21;

    // 10 9 
    // 9 10 
    // 10 10 

    // lindex가 rindex 보다 작을때는 왼쪽꺼를 리턴
    if (lindex < rindex)
        return str_list.slice(0, lindex)
    // rindex가 lindex보다 작을때는 오른쪽꺼를 리턴
    else if (lindex > rindex)
        return str_list.slice(rindex + 1)
    else return [];
}

// ["u", "u", "r", "d","d"]	 ["u", "u"]
// ["l"]	[]
// l이 없는 상황... r이 먼저 나온 상황이죠?
// ["u", "r", "d"] ["d"] / ["u", "l", "d"] ["u"] / ["u", "d"] []

// lindex = -1
// rindex = 1

console.log(solution(["u", "u", "l", "r"]))