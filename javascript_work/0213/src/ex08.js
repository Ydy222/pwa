function solution(my_string, letter) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++) {
        if(my_string[i]!==letter){
            answer = answer + my_string[i];
        }
    }
    console.log(answer);
    return answer;
}

solution('abcdef','f') // abcde
solution('BCBdbe','B') // Cdbe