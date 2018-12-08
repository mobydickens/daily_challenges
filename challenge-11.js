const listOfNums = [2, 5, 8, 23, 765, 2341, 757, 4332654, 143326, 5786, 678, 35, 27, 235, 765, 4];

function largestEven(nums) {
 for (let i = 0; i < nums.length - 1; i++) {
   var largestEven = 0;
   if (nums[i] % 2 === 1 && nums[i] < largestEven) {
     largestEven = nums[i];
   }
 }
 return largestEven;
}

console.log(largestEven(listOfNums));

// rewrite this using a filter to remove odds, then chain a .sort, then return the largest number

function largestEven2(nums) {
  let evenNumbers = nums.filter(num => num % 2 === 0).sort((a,b) => b-a);
  return evenNumbers[0];
}

console.log("Largest number is: ", largestEven2(listOfNums));