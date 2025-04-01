class Stack {
    // # private은 es2022에 추가되어서 
    // node에서 아직 지원하지 않음.

    // python javascript 문법이
    // java c ??? 
    arr;
    constructor(arr = []) {
        this.arr = arr;
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.pop();
    }
    entires() {
        return [...this.arr]
    }
}

const m = new Stack([1, 2, 3, 4]);
console.log(m);

m.push(5);
console.log(m);

m.pop();
console.log(m);