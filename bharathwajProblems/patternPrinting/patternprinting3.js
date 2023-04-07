// output
// 4
// 43
// 432
// 4321

let result = "";
let n =1;
for (let i = 4; i >= n; i--) {
  for(let j=4;j>=i; j--){
    result += j;
  }
  result += "\n";
}
console.log(result);