function solution(n, t) {
    var answer = n;

    for(var i=0;i<t;i++) answer = answer*2
    return answer;
}

var ret = solution(7, 15);
console.log(ret);
//