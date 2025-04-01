// 콜백함수
// setTime 함수와 시간
// 시간지나서 함수 실행해라

// 콜백함수
// addEventListener('click',function(){})

// 매개변수로 함수
// 콜백함수->화살표함수
const obj = {
    value: 100,
    foo() {
        // console.log(this.value);
        // const that = this;
        // setTimeout(function () {
        //     console.log("콜백함수");
        //     // console.log(this);
        //     console.log(this.value);
        //     // console.log(that.value);
        // }.bind(this), 2000);
        setTimeout(()=>{
            console.log("화살표함수");
            console.log(this.value);
        }, 2000);
    }
}

obj.foo();