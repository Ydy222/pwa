/*
"jaron"	"noraj"
"bread"	"daerb"
*/
function soultion(str) {
    var answer ="";
    for (let i = str.length-1 ; i > -1; i--) {
        console.log(str[i]); //  "j" "a" "r" "o" "n";
        answer = answer + str[i];
    }
    return answer;
}

console.log(soultion("jaronaqwe"));
