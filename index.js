function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    console.log(num)
    for (let num2 of arr){
      if (num + num2 === sum){
        solution.push([num, num2])
      }
    }
  }
  return solution
}
