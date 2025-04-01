// var a = [1, 2, 3, 4, 5];
// a.reverse();
// console.log(a);
//
// var b = [1, 2, 3, 4, 5, 6];
// b.reverse();
// console.log(b);

// var a = 10;
// var b = 20;
//
// var temp = a;
// a = b;
//
// console.log(a);
// console.log(b);
// console.log(temp);

function solution(num_list) {
    // 6개 배열이 들어오면 2로 나누었을 3
    // 5개 배열이 들어왔다. 2로 나누었을떄 2.5 -> parseInt(2.5)
    for (var i = 0; i < parseInt(num_list.length / 2); i++) {
        var temp = num_list[i];
        num_list[i] = num_list[num_list.length - (i + 1)];
        num_list[num_list.length - (i + 1)] = temp;
    }
    console.log(num_list);
    // // 1 이랑 4번 바꿈
    // num_list[1] = num_list[num_list.length - 2];
    // // 2 이랑 3이랑 바꿈
    // num_list[2] = num_list[num_list.length - 3];
    return num_list;
}
solution([1,2,3,4,5]);






