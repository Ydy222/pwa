const person = {
  name: "홍길동",
  age: 25,
};

const stringperson = JSON.stringify(person);
const objperson = JSON.parse(stringperson);

console.log(stringperson)
console.log(typeof stringperson)

console.log(objperson)
console.log(typeof objperson)