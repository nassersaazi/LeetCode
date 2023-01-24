// Hi, here's your problem today. This problem was recently asked by Facebook:

// Given a list of numbers, where every number shows up twice except for one number, find that one number.

// Example:

// Input: [4, 3, 2, 4, 1, 3, 2]
// Output: 1

// Here's the function signature:

// def singleNumber(nums):
//   # Fill this in.

// print singleNumber([4, 3, 2, 4, 1, 3, 2])
// # 1


// Challenge: Find a way to do this using O(1) memory.


// Map Solution
// init a map 

// for item in list 
//     if item key present in map add its val count by one else set its val count to 0

// return key for which val is 1

const numsDict = new Map();
const numsList = [4, 3, 2,4,1, 3, 2]

for (const i in numsList) {
    
    numsDict.set(numsDict[i],numsDict.has(numsList[i]) ? 0: 1);
    console.log(numsDict);
}

for (const [key, value] of numsDict) {
    if (value === 1) {
        console.log(`${key} is the non-duplicate number`)
        
    }
}


///Map solution doesnt  work ,i wonder fucking why! set solution below works though but
// O(n) space lol

//set solution
// for items in numsList
    // if item exists in set remove it else add it

// // return set ; which is our solution
// const solutionSet = new Set();

// for (const i in numsList) {
    
//     if (solutionSet.has(numsList[i])) solutionSet.delete(numsList[i]);
//     else solutionSet.add(numsList[i]);

//     console.log(solutionSet);

// }

// for (const value of solutionSet) {
//     console.log("Non duplicate number is ",value);
//   }
