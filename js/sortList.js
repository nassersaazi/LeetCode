
// Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

// Example 1:

// Input: [3, 3, 2, 1, 3, 2, 1]
// Output: [1, 1, 2, 2, 3, 3, 3]

// def sortNums(nums):
//   # Fill this in.

// print sortNums([3, 3, 2, 1, 3, 2, 1])
// # [1, 1, 2, 2, 3, 3, 3]


// Challenge: Try sorting the list using constant space.


// Possible solution

//Create hashmap of unique numbers as keys and their counts as values
// Overwrite old list with sorted list
const nums = [3, 3, 2, 1, 3, 2, 1];
const seen = new Map();

// for (const i in nums) {
//     //seen.set(e[i])
//     //console.log(e);
//     console.log(i[0]);
// }
//nums.forEach()


