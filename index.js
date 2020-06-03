function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    for (let num2 of arr)
      if (num + num2 === sum){
        let solArr = [num, num2]
        arr = arr.filter(e => e !== num && e !== num2)
        solution.push(solArr)
      }
  }
  return solution
}
