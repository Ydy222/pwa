function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        console.log(my_string[i]);

        if(my_string[i] ==='a'){}
        else if(my_string[i] ==='e'){}
        else if(my_string[i] ==='i'){}
        else if(my_string[i] ==='o'){}
        else if(my_string[i] ==='u'){}
        else{
            answer = answer + my_string[i];
        }
    }
    return answer;
}

// "nice to meet you" "nc t mt y"
// "bus"	"bs"
// a, e, i, o, u 

const value = solution("nice to meet you");
console.log(value);