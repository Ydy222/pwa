const setting = {
    theme: null,
    language: 'ko',
    person : {
        name : '홍길동'
    }
    // a:{
    //     b:'bb'
    // }
}
// 원시값으로 변경
// String(10) = '10'
// Number('3.5') = 3.5
// Boolean('') = false
console.log(Boolean(null));

// 에러가 발생한 곳에서 프로그램 종료
const b = setting.a?.b ?? 'a가 없습니다.';
console.log(b);

const userTheme = setting.theme || 'light';
console.log(userTheme);

const userLanguge = setting?.language;
console.log(userLanguge);

const userName = setting.person.name;
console.log(userName);

