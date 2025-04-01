var varA = 10;
function a(){
  console.log(this);
  console.log(varA);
}

const b = ()=>{
  console.log(this);
  console.log(varA);
}

a();
b();

setTimeout(()=>{
  console.log(this);
  console.log(varA);
},3000);

setTimeout(function(){
  console.log(this);
  console.log(varA);
},3000);