// 방법1
// class AA{
//     constructor(){
//         this.aa = 10;
//         this.bb = {
//             c:20,
//             ddd(){
//                 console.log("ddd");
//             }
//         }
//     }
// }
// module.exports = new AA();
// 방법2
module.exports = {
  aa: 10,
  bb: {
    c: 20,
    ddd() {
      console.log("ddd");
    },
  },
};
