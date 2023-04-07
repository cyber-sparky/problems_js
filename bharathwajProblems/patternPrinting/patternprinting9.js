// **************** printing number in reverse ***************
// 1234
// 123
// 12
// 1

let n = 4;
let string = "";
for (let i = 0; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string)