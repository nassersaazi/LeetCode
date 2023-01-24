// Hi, here's your problem today. This problem was recently asked by Facebook:

// You are given a list of numbers, and a target number k. Return whether or not 
// there are two numbers in the list that add up to k.

// Example:
// Given [4, 7, 1 , -3, 2] and k = 5,
// return true since 4 + 1 = 5.

// def two_sum(list, k):
//   # Fill this in.

// print two_sum([4,7,1,-3,2], 5)
// # True

//sorted list --> [7,4,2,1,-3]


// Try to do it in a single pass of the list.

// Possible solution

// while numsArray > 0
//     init stack with numsArray[0]
//     numsArray.shift() ///remove first item of array

//     if numsArray > 1
//     for i in numsArray
//         push i to stack
//         if sum of nums in stack is k return true else pop i from stack

const numsArray = [4,7,1,-3,2];
const k = 5;
console.log("Starting...")
while (numsArray.length > 0) {
    console.log("nums array...")
    const stack = [numsArray[0]]
    numsArray.shift()
    console.log(numsArray)
    if (numsArray > 1) {
        for (const i of numsArray) {
            stack.push(numsArray[i])
            let sum = stack.reduce((a, b) => a + b, 0) 
            console.log(sum)
            if (sum === k) {
                console.log("Item found")
            }
            else {
                stack.pop();
                console.log("Item not found(yet)")
            }
        }
    }
}


/////Not fucking working....I wonder fucking why!!!!!
