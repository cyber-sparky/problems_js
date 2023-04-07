// output
// 1
//   2
//     3
//       4
//          3
//            2
//               1

let n = 4;
let str = "";
for (let i = 1; i <= n; i++) {
  str = str + "  ";
  console.log(str + i);
}
for (let i = n-1; i >= 1; i--) {
  str = str + "  ";
  console.log(str + i);
}