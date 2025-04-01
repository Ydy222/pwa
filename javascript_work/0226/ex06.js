function doA(){
    this.aa = 10;
    this.bb = 20;
    // return this;
    return 100;
}

const aa = new doA();
console.log(aa);

const value = doA();
console.log(value);