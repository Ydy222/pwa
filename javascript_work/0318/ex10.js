class Student{
    학교이름 = "서울대학교";
    constructor(name,grade){
        this.name = name;
        this.grade = grade;
    }

    doB(age){
        this.age = age ;
    }

    static doA(){
        console.log(`정적 메서드 입니다.`);
    }
}

// Student.doA();

const stu = new Student("홍길동","1학년");
stu.doB(30);

console.log(stu);

// stu.doA();