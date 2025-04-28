// 수정
fetch("http://localhost:5000/todos/3", {
  method: "PUT",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    todo: "수정수정",
    completed: false,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
