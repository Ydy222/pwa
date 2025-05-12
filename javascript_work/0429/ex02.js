let g = 0;

setTimeout(() => {
  g = 100;
  console.log('내부 g = ',g);
},0);

console.log('g',g);