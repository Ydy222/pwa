function solution(my_string) {
    var comp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var answer = new Array(comp.length).fill(0);
    for (var j = 0; j < comp.length; j++) {
        for (var i = 0; i < my_string.length; i++) {
            if (comp[j] == my_string[i]) {
                console.log(answer[j]);
                console.log(j);
                answer[j]++;
            }
        }
    }
    return answer;
}

console.log(solution("Programmers"));