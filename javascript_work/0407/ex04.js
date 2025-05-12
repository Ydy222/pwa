const re = /hello/i;

console.log(re.test("hello"));
console.log(re.test("Hello"));
console.log(re.test("world"));

const str = "orange apple orange";

const result = str.replace(/orange/g, "test");
console.log(result);

const result2 = str.replace(/orange/g, (match)=>{
    return match+"변경했음";
});
console.log(result2);

const price = "1000원 2000원 4000원";
console.log(price.replace(/(\d+)/g,
    (match) => `${parseInt(match) * 2}`)
);

// "2000원"
