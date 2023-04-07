let a = [1,2,3,4,5,6,7,8,9,10]
let n = 0;
a.forEach(e=>{
    if(e%2==0){
        n = n+e
    }
})
console.log(n);

// output
// 30