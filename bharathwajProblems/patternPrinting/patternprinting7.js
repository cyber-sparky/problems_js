// output

//   1
//  1 2
// 1 2 3

function getSpaces(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " ";
  }
  return str;
}
function getNumSequence(n) {
  let numseq_str = "";
  for (let i = 1; i <= n; i++) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}
function getReverseNumSequence(n) {
  let numseq_str = "";
  for (let i = n; i <= 1; i--) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}
console.log(getSpaces(3) + getNumSequence(1));
console.log(getSpaces(2) + getNumSequence(2));
console.log(getSpaces(1) + getNumSequence(3));
