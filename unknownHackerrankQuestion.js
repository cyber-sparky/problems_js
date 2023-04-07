// output
// 0 doses

let height = [1, 6 ,3, 5, 2]
let k = 10;
var largest = height[0];

for (var i = 0; i < height.length; i++) {
    if (largest < height[i] ) {
        largest = height[i];
    }
}
if(largest > k){
    console.log(largest-k+"doses")
}else{
    console.log("0 doses")
}