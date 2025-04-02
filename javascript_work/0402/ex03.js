const tel = '01-9946-2662';

const re = /^\d{3}-\d{4}-\d{4}$/;

console.log(re.test(tel));
console.log(re.exec(tel));