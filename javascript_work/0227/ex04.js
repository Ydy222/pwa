function aa(name, age) {
    this.name = name;
    this.age = age;

    // if( typeof new.target === 'undefined')
    //     return new aa(name,age);
    if( !new.target )
        return new aa(name,age);
}

const a1 = aa('박길동',20); // new aa('박길동',20)
const a2 = new aa('박길동',20);

console.log(a1);
console.log(a2);
