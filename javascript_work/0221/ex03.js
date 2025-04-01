const result =
    [1, 2, 3].filter(item => {
        console.log(item);
        return item % 2;
    });

console.log(result);

/*
    database 
    member
*/
const people = [
    { name: '홍길동', age: 20 },
    { name: '안철수', age: 50 },
    { name: "박길동", age: 30 }
];

// filter, map

const result1 = people.filter( item =>{
    console.log(item);
    return item.name.includes('길동');
});

console.log(result1);
const result2 = result1.map( item =>{
    return `<li>name=${item.name}</li>
            <li>age=${item.age}</li>`;
}).join(' ');

console.log(result2);

const result3 = 
        people
        .filter( item => item.name.includes('길동'))
        .map( item => `
                    <li>name=${item.name}</li>
                    <li>age=${item.age}</li>
                    `)
        .join('');

console.log(result3);