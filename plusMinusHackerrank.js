array = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
  let positiveNum = 0;
  let negativeNum = 0;
  let zeros = 0;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
          positiveNum += 1
      }else if(arr[i] < 0){
          negativeNum += 1
      }else{
          zeros += 1;
      }
  }
  let positiveSum = positiveNum / arr.length;
      let negativeSum = negativeNum / arr.length;
      let zerosSum = zeros/arr.length;
      positiveSum= positiveSum.toFixed(6)
      negativeSum =negativeSum.toFixed(6)
      zeros = zeros.toFixed(6)
      console.log(positiveSum)
      console.log(negativeSum)
      console.log(zerosSum)
}

plusMinus(array)
