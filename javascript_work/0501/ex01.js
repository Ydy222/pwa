function * genFunc(){
    yield 1;
    yield 2;
    yield 3;
}
const gen = genFunc();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log([...gen]);

// Symbol.iterator
const sym = (function(){
    let cur = 1;
    const max = 5;
    return {
        [Symbol.iterator](){ return this;},
        next(){
            return {value: cur++, done: cur==max};
        }
    }
})();
console.log(sym.next());
console.log(sym.next());
console.log(sym.next());
console.log(sym.next());

console.log([...sym]);




