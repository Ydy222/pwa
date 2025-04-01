function add(x, y, z) {
    console.log(arguments);
    // console.log(caller);
    return x + y;
}
add(10, 20, 30);