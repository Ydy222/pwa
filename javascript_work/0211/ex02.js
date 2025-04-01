
// for (; ;) {
//     console.log("1 " + a);
//     a++;
//     if (a === 20) {
//         break;
//     }
// }
var a = 10;

while (true) {
    a=a+1;  // a++ a+=1
    if(a==15){
        continue;
    }
    console.log("1 " + a);
    if (a === 20) {
        break;
    }
}