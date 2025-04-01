
function getyl(cDate){
    const yl = [ '일요일',
                '월요일',
                '화요일',
                '수요일',
                '목요일',
                '금요일',
                '토요일' ]
    return yl[cDate.getDay()];
}
const mydate = new Date();
console.log(mydate);
console.log(`${mydate.getFullYear()}년 
${mydate.getMonth()+1}월 
${mydate.getDate()}일 
${getyl(mydate)}
${mydate.getHours()}시 
${mydate.getMinutes()}분 
${mydate.getSeconds()}초`);