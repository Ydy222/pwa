(async () => {
  // console.log('즉시함수 호출');
  const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (result.status !== 404) {
    const res = await result.json();
    console.log(res);
  }
})();
