function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    if (checkSolutions(num, solution)){
      let num2 = sum - num
      if (arr.includes(num2)){
          solution.push([num, num2])
      }
    }
  }
  return solution
}

function binarySearchTwoSum(arr, sum){

}

function checkSolutions(num, solution){
  let answer = true
  solution.forEach(arr => arr.includes(num) ? answer = false : null )
  return answer
}
