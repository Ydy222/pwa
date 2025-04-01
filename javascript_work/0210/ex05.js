var a = 2;
var b;

// break를 만나면 switch 구문 탈출
switch (a) {
    case 1:
        b = "1입니다";
        break;
    case 2:
        b = "2입니다";
    case 3:
        console.log("저기오냐");
        b = "3입니다";
        break;
    default:
        console.log("여기오냐");
        b = '기본';
}

console.log(b);