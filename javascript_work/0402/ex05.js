const target = 'color colour color colour';

// ? 0번 포함 매칭
// + 1번 이라도 나오는거 매칭
const arr = target.match(/colou?r/g);
console.log(arr);