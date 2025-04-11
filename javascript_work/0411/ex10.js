const user = {
  name: "홍길동",
  addr: {
    zipcode: 101,
    city: "daegu",
  },
};

const {
  name,
  addr: { city },
} = user;
console.log(`name ${name}`);
// console.log(`addr ${JSON.stringify(addr)}`);
console.log(`city ${city}`);
