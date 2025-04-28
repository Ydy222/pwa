fetch("http://localhost:5000/todos", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    todo: "야구표구매해야하는데 11시 되어가는데",
    completed: false,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
