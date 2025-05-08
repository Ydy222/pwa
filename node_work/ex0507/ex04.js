console.log("일반 함수");
console.log(this); // 빈객체
function aa() {
  console.log(this);
}
// aa();

const a = {
  name: "zero",
  friend: ["nore", "hero", "xero"],
  logFriend: function () {
    var that = this;    // a 객체
    // console.log(this);
    this.friend.forEach( function(f) {
    //   console.log(this);    // global 변수 
      console.log(that.name, f);
    });
  },
};
a.logFriend();

// es2015 es6

console.log("화살표 함수");
const b = {
  name: "zero",
  friend: ["nore", "hero", "xero"],
  logFriend() {
    this.friend.forEach((f) => {
      console.log(f);
    });
  },
};
b.logFriend();
