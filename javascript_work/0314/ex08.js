const counter = function (){
    let num = 0;
    function counter(){
    }
    counter.prototype.increase = function(){
        ++num;
        return num;
    }
    counter.prototype.decrease = function(){
        --num;
        return num;
    }
    return counter;
}();

const cn = new counter();
console.log(cn.increase());
console.log(cn.increase());
console.log(cn.decrease());
console.log(cn.decrease());

// console.log(counter.increase());

