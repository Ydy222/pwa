const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});

// porimise객체 
// const res = await Supabase.storage.from('ex01').upload();

// promise.then(res => {
//     console.log(res);
// }); // 1초 후 "Done!" 출력

// 오후 수업 console.log(res) -> Promise{}
const ret = promise;
console.log(ret);