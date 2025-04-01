function doA() {
    console.log(this);
}
doA();

const obj = {
    name: "디스디스",
    doA() {
        console.log(this.name);
    },
    doC(){
        console.log(this.name);
    }
}
obj.doA();
obj['name'];
obj['doC']();

// 화살표함수의 this 상위 스코프의 this를 가리킨다.
const arrow = () => {
    console.log('상위스코프 ' + this);
}
arrow();

const obj2 = {
    name: "obj2",
    arrow: function () {
        console.log(this);
        (() => {
            console.log("this " + JSON.stringify(this));
        })();
    },
}
obj2.arrow();