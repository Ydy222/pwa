const arr = [1, 2, 3, 4, 5];

const iter = arr[Symbol.iterator]();

// for(   ;     ;    ){
while(true){
    const result = iter.next();
    if(result.done) break;
    console.log(result.value);
}

for (const element of arr) {
    console.log(element);
}