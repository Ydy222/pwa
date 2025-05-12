fetch("https://jsonplaceholder.typicode.com/users/100000")
  .then((res) => {
    // console.log(res);
    if (res.status !== 404) return res.json(); // Promise객체로 resolve(res.json)
    else return '실패';
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
