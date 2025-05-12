// module import from react
// commonjs require

const loadash = require("lodash");

const { debounce, throttle } = loadash;

// console.log(loadash.debounce);
// console.log(loadash.throttle);

// 디바운스 함수 이벤트가 발생해도 300밀리초안에 1번만 실행되는거
const aa = debounce(() => {
  console.log("debounce");
}, 300);

aa();
aa();
aa();
aa();

// 디바운스랑 비슷한데 쓰로틀은 디바운스보다는 조금 더 여러번 발생한다.
const bb = throttle(() => {
  console.log("throttle");
}, 300);

bb();
bb();
bb();
bb();
