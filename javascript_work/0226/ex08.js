// constructor
function foo() { };

// 에러가 나지 않는다. 그러므로 잘 된다.
foo();
new foo();

// non-constructor // 정상적으로..?
const arrow = () => { console.log("test"); }

arrow();
// new arrow();

const obj = {
    x(){
        console.log("obj x");
    }
}

obj.x();

// new obj.x();