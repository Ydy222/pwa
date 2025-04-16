// 무한으로 만들면 메모리 낭비
// next호출이 될때 메모리 할당
function* test() {
  // yield 1;
  // yield 10;
  let i = 1;
  while (true) {
    yield i++;
  }
}
const t = test();
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
