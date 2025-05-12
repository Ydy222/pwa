Array.prototype[Symbol.for('sum')] = function () {
    console.log(this);
    return this.reduce((a, b) => {
      return a + b;
    }, 0);
  };
  
  const arr = [10, 20, 30];
  console.log(arr[Symbol.for('sum')]());
  console.log([1,2,3,4,5][Symbol.for('sum')]());
  
  