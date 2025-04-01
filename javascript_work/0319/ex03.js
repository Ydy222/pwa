// java c#
class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    
    // prototype 메서드
    sayHi(){
        console.log(`this.title ${this.title} this.content ${this.content}`);
    }
    // 정적 메서드
    static doA(num1,num2){
        console.log(`this.title ${this.title} this.content ${this.content}`);
    }
}
const post = new Post("제목제목", "내용내용");
console.log(post);

post.sayHi();
Post.doA();