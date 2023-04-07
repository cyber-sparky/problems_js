// output
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

let n = 5;
let end = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    end = end+j+" ";
  }
  end += "\n";
}
console.log(end);