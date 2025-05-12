fetch("https://dummyjson.com/todos", { method: "POST" })
  .then((res) => res.json())
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  });


const axios = require("axios");

axios.post("https://dummyjson.com/todos").then((res) => {
  console.log(res.data.todos);
});
