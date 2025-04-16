const lee = { name: "lee" };
const kim = { name: "kim" };

const map = new Map([
  [lee, "developer"],
  [kim, "designer"],
]);

console.log(map);
console.log('----keys()')
for (const element of map.keys()) {
    console.log(element);
}
console.log('----values()')
for (const element of map.values()) {
    console.log(element);
}
console.log('----entires()')
for (const element of map.entries()) {
    console.log(element);
}
