function snakeToCamel(str){
    console.log(str);
    console.log(str.match(/_[a-z]/));

    return str.replace(/_[a-z]/g, asdf=>{
        console.log(asdf);
        return asdf[1].toUpperCase();
    })
}

console.log(snakeToCamel('hello_world'));
console.log(snakeToCamel('a_b_c_d'));