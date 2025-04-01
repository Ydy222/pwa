// 도덕적 규율... 지켜도 안지켜도..
// 생성자 함수 new 대문자로 사용하는것을 좋아합니다
/*
Stack.prototype.push = function(item){
    // console.log("this = ");
    // console.log(this);
    this.arr.push(item);
}
*/
const Stack = function () {
    function Stack(arr = []) {
        if (!Array.isArray(arr)) {
            // 에러 강제 발생
            throw new TypeError(`${arr}is not Array`);
        }
        this.arr = arr;
    }
    Stack.prototype = {
        push(item) {
            this.arr.push(item);
        },
        pop() {
            return this.arr.pop();
        },
        entries() {
            return [...this.arr];
        }
    }
    return Stack;
}();

const mystack = new Stack([1, 2, 3])
// new stack("배열아닌거")

mystack.push(4);
mystack.push(5);

mystack.pop();

console.log("mystack = ");
console.log(mystack);
console.log(mystack.entries());