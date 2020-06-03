function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    for (let num2 of arr){
      if (num + num2 === sum){
        solution.push([num, num2])
      }
    }
    arr.shift()
    console.log(arr)
  }
  return solution
}
