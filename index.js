function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    for (let num2 of arr)
      if (num + num2 === sum){
        let solArr = [num, num2]
        solution.push(solArr)
      }
    arr.shift()
  }
  return solution
}
