function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    let num2 = sum - num
    if (arr.includes(num2)){
      if(!solution.includes([num, num2] || [num2, num])){
        solution.push([num, num2])
      }

    }
  }
  return solution
}
