// 삭제
fetch("http://localhost:5000/todos/3", {
  method: "DELETE"
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
