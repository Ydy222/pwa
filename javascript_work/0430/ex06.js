const result = Promise.resolve([1,2,3]);
console.log(result);

console.log('then 처리 ===========');
result.then(console.log);
result.then(res=>{console.log(res)});