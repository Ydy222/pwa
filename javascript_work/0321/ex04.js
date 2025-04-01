const obj = {
    aa: function () { },
    bb() { },
    cc: ()=>{}
}

new obj.aa();// 됨
// new obj.bb(); //안됨
// new obj.cc(); // 안됨

console.log(obj.aa.hasOwnProperty('prototype'))
console.log(obj.bb.hasOwnProperty('prototype'))
console.log(obj.cc.hasOwnProperty('prototype'))