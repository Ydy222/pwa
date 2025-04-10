function doA(...rest) {
  console.log(rest);
  console.log(rest[0]);
  console.log(rest[1]);
  console.log(rest[2]);
}

// doA(1, 2, 3, 4, 5);
// doA(...[1, 2, 3, 4, 5]);
doA([1, 2, 3, 4, 5]);

