const util = require("util");

const aa = ()=>{
    console.log("aa");
}

const dontUseMe = util.deprecate(aa, "사용하지 않으면 좋겠다 인제 그만 사용해라");

dontUseMe();
