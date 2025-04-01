function test(){
    this.aa=10;
}

test();

console.log(global.aa);
console.log(globalThis.aa);