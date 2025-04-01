// java c#
x = 10; // 암묵적으로 전역변수 선언
class Post {
    aa = 10;
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    // prototype에 들어가는 함수
    // prototype 메서드
    sayHi() {
        // strict모드
        x = 10; 

    }
    // 정적 메서드
    static doA() {
    }
}

// function aa(){
// }

// new aa();
// 클래스 안에 있는 메서드는 non-constructor 함수이다.
new Post.sayHi();

const post = new Post("제목제목", "내용내용");
console.log(post);

// javascript ... 일반
const post1 = {
    title: "재목",
    content: "내용내용",
    // 메모리 낭비를 유발한다.
    sayHi() {
    },
    // 
    aa: function () { },
}
console.log(post1);

// supabase.from