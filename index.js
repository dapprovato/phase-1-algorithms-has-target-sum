function hasTargetSum(array, target) {
  // Write your algorithm here
  // let totalSum

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] == target) {
        return true;
      }
      // return (array[i] + array[j]) == target
    }
  }
  return false;
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate over each possible combination using
  nested for loops??
  if arr[0] + arr[1] === target
  if arr[0] + arr[2] === target
  if arr[0] + arr[3] === target
  ...
  if arr[1] + arr[0] === target
  if arr[1] + arr[2] === target
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
