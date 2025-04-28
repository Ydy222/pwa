// 느긋하게 해라..

function aa() {
  console.log("aa");
}

function bb() {
  console.log("bb");
}

setTimeout(aa, 0);  // 4ms에 딜레이가 생성이 됩니다.
bb();
setTimeout(bb, 0);  // 4ms에 딜레이가 생성이 됩니다.
