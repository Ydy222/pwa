const arr = ['aa', 'bb', 'bb', 'cc', 'aa', 'dd'];
/*
{
    aa:2,
    bb:2,
    cc:1,
    dd:1
}
*/

const result = arr.reduce((a, b) => {
    console.log(`a = ${JSON.stringify(a)}`);
    console.log(`b = ${b}`);
    a[b] = (a[b] || 0) + 1;
    return a;
}, {});

console.log(`result = ${JSON.stringify(result)}`);