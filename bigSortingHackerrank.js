function bigSorting(unsorted) {
    unsorted = unsorted.map(BigInt);
 for (let i = 0; i <= unsorted.length; i++) {
    for (let j = 0; j < unsorted.length; j++) {
      if(unsorted[j] > unsorted[j + 1]){  
        let temp = unsorted[j]
        unsorted[j] = unsorted[j +1]
        unsorted[j + 1] = temp;
      }
    }
  }
  return unsorted;
}
