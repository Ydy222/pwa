function a() {
  let sum = 0;
  for (let i = 0; i < 5_000_000_000; i++) {
    sum += i;
  }
  console.log(sum);
}

console.log("오래걸리는거 시작 논블로킹");
// a();
setTimeout(a, 0);
setTimeout(a, 0);
setTimeout(a, 0);

console.log("오래걸리는거 끝 논블로킹");
// 중요하게 되면
// a() 끝날때까지 기다려야되죠..

// 여기에서 중요한일 할꺼야