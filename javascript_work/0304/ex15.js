// 접근자 프로퍼티
const person = {
    fname: "홍",
    lname: "길동",
    get fullname() {
        return this.fname + this.lname;
    },
    set fullname(fullname) {
        [this.fname, this.lname] = fullname.split('-');
    }
}

console.log(person.fullname);
person.fullname = "박-길동";
console.log(person.fullname);

const aa = "a,b,c,d";
const [ele0, ele1, ele2, ele3] = ['a','b','c','d'];
console.log(ele0);
console.log(ele1);
console.log(ele2);
console.log(ele3);