const aa = (x, y) => { return { x, y } };

const result = aa(10, 20);
console.log(result);

// filter return true false item반환
// map 내마음데로 반환가능

// react javascript 
const arr = [{ name: 'LEE' },
            { name: 'KIM' },
            { name: 'PARK' }]
    .map((item, index, arr) => {
        console.log(`item = ${JSON.stringify(item)}`);
        console.log(`index = ${index}`);
        console.log(`arr = ${arr}`);
        return `<div>name = ${item.name}</div>`;
    });

console.log(arr);