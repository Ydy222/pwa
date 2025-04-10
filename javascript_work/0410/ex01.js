const iter = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return { value: cur++, done: cur>max };
      },
    };
  },
};

const i = iter[Symbol.iterator]();
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

console.log(...iter);
