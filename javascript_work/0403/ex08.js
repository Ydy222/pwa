function camelToSnake(str){
    console.log(str);
    console.log(str.match(/.[A-Z]/));

    // replace 두가지...방식...
    // 1.replace (aa,bb)
    // 2.replace (aa, (aa)=>{});
    return str.replace(/.[A-Z]/, ele=>{
        console.log(ele);
        return ele[0]+'_'+ele[1].toLowerCase()
    })
    // console.log(/.[A-Z]/.match(str));

    // String.prototype.match
    // RegExp.prototype.exec
    // RegExp.prototype.test
}
// "aa".replace
console.log(camelToSnake("helloWorld"));