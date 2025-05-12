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
      reject("특정 에러가 발생하였습니다."); // promise가 rejected 된상태
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
// Pomise 객체를 꺼내는 역활을 하는게 then await 입니다.
try{
    // 기다려라
    const result = await Promise.all([reqData1(), reqData2(), reqData3()]);
    console.log(result);
}catch(e){
    console.log('에러발생 '+e);
}

// Promise 만나면 비동기 처리
// Promise.all([reqData1(), reqData2(), reqData3()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

console.log("종료되었습니다");
