// output
// 1
// 2
// Superstar
// 4
// Rajinikanth
// Superstar
// 7
// 8
// Superstar
// Rajinikanth
// 11
// Superstar
// 13
// 14
// Superstar

n = 15;
for (let i = 1; i <= n; i++) {
  if (i % 3 == 0) {
    console.log("Superstar");
  } else if (i % 5 == 0) {
    console.log("Rajinikanth");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("Superstar Rajinikanth");
  } else {
    console.log(i);
  }
}