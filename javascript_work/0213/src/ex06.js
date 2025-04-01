const circle = {
    radius: 5,
    getDiameter: function(){
        return 2 * this.radius;
    }
}

console.log(circle);
console.log(circle.getDiameter);
console.log(circle.getDiameter());

var person = {
    name : "John",
}

var name = "name";

console.log(person.name);
console.log(person[name]);