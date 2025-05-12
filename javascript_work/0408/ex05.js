Array.prototype.sum = function () {
  console.log(this);
  return this.reduce((a, b) => {
    return a + b;
  }, 0);
};

const arr = [10, 20, 30];
console.log(arr.sum());

// 앞에꺼 삭제 하는 함수
arr.shift();

// 앞에꺼 추가 하는 함수
arr.unshift(200);
arr.unshift(100);

console.log(arr);
