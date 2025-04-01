const arr = ["aa", "bb", "cc"];
// map webkit-aa webkit-bb webkit-cc
class AA {
    constructor(pre) {
        this.pre = pre;
    }
    add(arr) {
        // console.log(arr.map((item)=> `${this.pre}-${item}`));
        return arr.map((item) => `${this.pre}-${item}`);
    }
}
const aa = new AA("webkit");
const prearr = aa.add(arr);
console.log(prearr);

// const result = arr.map((item) => {
//     console.log(`item = ${item}`);
//     return `webkit-${item}`;
// });

// console.log(result);