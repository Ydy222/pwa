const regex = /\d+$/;
console.log(regex.test("1231234asdf")); // true
console.log("123 abc 456 aa 567".match(regex)); // ["123"]