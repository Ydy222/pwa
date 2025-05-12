const person = {
  name: "홍길동",
  age: 25,
};

const filter = function (key, value) {
  return typeof value === "number" ? undefined : value;
};

const stringfilter = function (key, value) {
    return typeof value === "string" ? undefined : value;
};

console.log(typeof person);

console.log(typeof JSON.stringify(person));
console.log()


console.log(JSON.stringify(person, null, 2));
console.log(JSON.stringify(person, filter, 2));
console.log(JSON.stringify(person, stringfilter, 2));
