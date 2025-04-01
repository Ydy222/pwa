var funcs = [];

// es2015 es6 엄청난 부활...
// python javascript ...
// javascript
for (var i = 0; i < 3; i++) {
    funcs[i] = (function (id) {
        return function () {
            return id;
        }
    }(i));
}

// var i = window.i
// [ function(){return i}, function(){return i}, function(){return i} ]
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());