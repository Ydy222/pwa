// commonjs nodejs -> require
// mudulejs react -> import from
const dayjs = require('dayjs');
// console.log(dayjs);

const now = dayjs();
console.log(now.format('YYYY년MM월D일 HH시mm분ss초'));

const 내년 = dayjs(now).add(1,'year');
console.log(내년.format('YYYY/MM/DD'));

const 다음달 = dayjs(now).add(1,'month');
console.log(다음달.format('YYYY/MM/DD'));

const 저번달 = dayjs(now).add(-1,'month');
console.log(저번달.format('YYYY/MM/DD'));

const 마지막날 = dayjs(now).endOf('month').date();
console.log(마지막날);