console.log('test')

fetch('http://localhost:5000/todos/3')
.then(res=>res.json())
.then(data=>{
    console.log(data);
})