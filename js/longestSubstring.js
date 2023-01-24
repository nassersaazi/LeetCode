

// Given a string, find the length 
// of the longest substring without repeating characters

const str = "abrkaabcdefghijjxxx"
// a brka abcdefghij jx x x
const lengthOfLongestSubstring = (s) => {
    const seen = new Map();
    let start = 0;
    let maxLen = 0;
    
    for(const [i,e] in s) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(i)) start = Math.max(seen.get(i) + 1, start);
        seen.set(e, i);
       
        // maximum of the current substring  length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
        
    } 
 
  
    return maxLen;  
};

const destCity = (paths) => {

//     You are given the array paths, where paths[i] = [cityAi, cityBi] means there
//      exists a direct path going from cityAi to cityBi. Return the destination city, 
//      that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, 
// there will be exactly one destination city.

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the
//  destination city.
//  Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo"


   
    //Map solution
//   const map = new Map();
//   for (const path of paths) {
     
//     map.set(path[0], map.has(path[0]) ? 0 : 1);
//     map.set(path[1], map.has(path[1]) ? 0 : -1);
//        //console.log(map)
//   }
//     console.log(map);
    
//   for (const [key,val] of map) {
//     if (val === -1) return key;
//   }

    // this set solution is just more elegant lol
    const set = new Set();
    for (const path of paths) set.add(path[0]);
    for (const path of paths) {
    if (!set.has(path[1])) return path[1];
 }
  
};

const groupAnagrams = (s) => {

    // * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
    // * Output: 
    // * [
    // * ["ate","eat","tea"],
    // * ["nat", "tan"],
    // * ["bat"]
    // * ]
    const hash =  new Map()
    const result = []
    for (const i of s) {
        const word = i.split('').sort().join('');
        (hash.has(word)) ? hash.get(word).push(i) : hash.set(word,[i]);
       
    }
    
    for (const [key,val] of hash) result.push(val)

    console.log("Anagram groupings " ,result)
}
const input = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(input)
const count = lengthOfLongestSubstring(str)
console.log(count);

