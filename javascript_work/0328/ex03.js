class AA {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(function (item) {
            console.log("this = ");
            console.log(this);
            return this.prefix +'-'+ item;
            // console.log(this.prefix);
        }, this);
    }
}

const me = new AA('webkit');
const arr = me.add(['transition', 'user-select']);
console.log(arr);

// [ webkit-transition , webkit-user-select];