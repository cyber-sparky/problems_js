// output

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 

// ********    WITHOUT IF CONDITION *****

let n = 4;
let str = "";
for (let i = 1; i <= n; i++) {
  str = str + i + " ";
  console.log(str);
}

// ******    WITH IF CONDITION     ***

let n = 4;
let str = "";
for (let i = 1; i <= n; i++) {
  if (i <=n ) {
  str = str + i + " ";
  console.log(str);
  }
}