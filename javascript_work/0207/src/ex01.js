// var 문자열= "aa";
// console.log(문자열.length);
//
// var aa = [10,20,30];
// console.log(aa.length);
// console.log(aa[0]);
// console.log(aa[1]);
// console.log(aa[2]);
// console.log(aa[3]);

// var aa = [];
// aa.push(10);
// aa.push(20);
// aa.push(30);
// console.log(aa[0]);
// console.log(aa[1]);
// console.log(aa[2]);

function solution(strlist) {
    // console.log(strlist[0]);
    // console.log(strlist[1]);
    // console.log(strlist[2]);
    // console.log(strlist[3]);
    var answer = [];

    for (var i = 0; i < strlist.length; i++) {
        console.log(strlist[i]);
        answer.push(strlist[i].length);
    }
    return answer;
}

const res = solution(["we", "are", "the", "world!"]);
console.log(res);












