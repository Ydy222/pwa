// node 환경에서는 window 출력되지 않음..
// console.log(window);
// console.log(document);

// function countDown(n) {
//     for (var i = n; i > -1; i--) {
//         console.log(i);
//     }
// }

// countDown(10)-> countDown(9) ->
//  countDown(8)-> countDown(7) -> countDown(6)-> countDown(5)
function countDown(n){
    console.log("호출됨");
    if(n < 0) return;
    console.log(n);
    countDown(n-1);
}

countDown(10);