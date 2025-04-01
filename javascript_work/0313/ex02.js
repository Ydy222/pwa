/*
    this
*/

// document.querySelector('td'); -> td태그 하나
// document.querySelectorAll('td'); -> td태그 여러개 배열로 가져옵니다.

const arr = [
    "<td>{ name: '홍길동', age: 20 }</td>",
    "<td>{ name: '김길동', age: 30 }</td>",
    "<td>{ name: '김철수', age: 25 }</td>"
];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }   

// forEach 반환값X 
// map 반환값O 
// filter true,false에 따라서 반환
// reduce 줄여서 반환하는거

arr.forEach(obj => {
    console.log(obj);
})