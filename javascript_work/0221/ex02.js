function solution(s1, s2) {
    // console.log(s1);
    // console.log(s2);
    var count = 0;

    for (var i = 0; i < s1.length; i++) {
        console.log(s1[i]);
        for( var j = 0; j<s2.length; j++){
            console.log(s2[j]);
            if(s1[i]===s2[j])
                count++;
        }
    }

    // s1.forEach(element => {
    //     console.log(element);
    //     s2.forEach(s2_element=>{
    //         console.log(s2_element);
    //         if(element === s2_element){
    //             count ++;
    //         }
    //     })
    // });
    return count;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]))
// console.log(solution(["n", "omg"], ["m", "dot"]))