// output
// 12345654321

n = 6;
let str = " ";
for (let i = 1; i <= n; i++) {
  str = str + i;
  if (i == n) {
    for (let i = n-1; i >= 1; i--) {
      str = str + i;
    }
  }
}
console.log(str);