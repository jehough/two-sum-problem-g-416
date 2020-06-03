function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    for (let num2 of arr)
      if (num + num2 === sum){
        solArr = [num, num2]
        solution.push(solArr)
      }
  }
  return solution
}
