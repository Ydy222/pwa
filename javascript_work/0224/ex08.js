if(true){
    // msg 변수는 유효 범위가 if 구문 안이기 때문에 안된다.
    let msg = "msgmsg";
    console.log(msg);
}

console.log(msg);