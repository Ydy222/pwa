const re = /(\d{3})-(\d{3,4})-(\d{4})/;

const str = "010-1234-1234";
console.log(re.test(str));
console.log(re.test("010-12-1234"));
console.log(re.test("010-abc-1234"));
