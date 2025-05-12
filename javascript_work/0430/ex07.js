const reqData1 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(1); // promise가 fullfilled 된상태
    }, 3000);
  });
};
const reqData2 = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject(2); // promise가 fullfilled 된상태
    }, 3000);
  });
};
const reqData3 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(3); // promise가 fullfilled 된상태
    }, 3000);
  });
};

// const result = await reqData1();
// console.log(result);

// 6초 걸리는거...
// reqData1().then((result) => {
//   console.log(result);
//   return reqData2()
// })
// .then(result=>{
//     console.log(result);
//     return reqData3();
// })
// .then(result=>{
//     console.log(result);
// });

// then await
// supabase await ??
// Promise.all() 3개를 병렬 처리 하기 때문에 3초만에 끝이난다.
const result = await Promise.all([reqData1(), reqData2(), reqData3()]);
console.log(result);

Promise.all([reqData1(), reqData2(), reqData3()]).then((res) => {
  console.log(res);
});
