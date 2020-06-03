function bruteForceTwoSum(arr, sum){
  let solution = []
  for (num of arr){
    for (num2 of arr)
      if (num + num2 === sum){
        solArr = [num, num2]
        solution.push(solArr)
      }
  }
}