
// set all reqs to none

class Block{
    constructor(req1,req2,req3) {
        this.req1 = req1;
        this.req2 = req2;
        this.req3 = req3;

    }
}

const blocks = [
    {
        gym: true,
        office:false,
        school: false
    },
    {
        gym: true,
        office:false,
        school: true
    },
    {
        gym: true,
        office:false,
        school: false
    },
    {
        gym: false,
        office:true,
        school: false
    },
    {
        gym: true,
        office:false,
        school: false
    },
    {
        gym: true,
        office:false,
        school: false
    },
    {
        gym: true,
        office:false,
        school: true
    }
]

myDict = new Map()

for (let index = 0; index < blocks.length; index++) {
    myDict.set(index,blocks[index]) ;
}


const x = myDict.get(5)
console.log(x.office)
console.log(myDict)
console.log(myDict.has(8))
console.log(myDict.has(3))



const left_q = blocks.slice(0,5)
const right_q = blocks.slice(5,blocks.length).reverse()




// reqArray = [req1,req2,req3]
// objArray = blocks
// construct three queues from the array ie targetq leftq and reversed rightq

// created reqDistance dict and init all vals to null 

// targetobj = item in targetq
// minDistance = objArray.length

//for req in reqArray
    // if targetobj[req] = true
        //reqDistance[req] = 0
    

// leftreqDistance =evalq(leftq,reqDistance,minDistance,reqArray)
// rightreqDistance =evalq(leftq,leftReqDistance,minDistance,reqArray)
// for item in rightq, call evalq

// evalq(q,reqDistance,minDistance,reqArray)
// /// 5,7
// while q.lenqth > 0
//     block = q.shift
//     for req in reqArray
    //     if block[req] is true 
    //         if reqDistance[req] != null and reqDistance[req] != 0
    //             reqDistance[req] = min(minDistance,(q.length + 1)) 
// return reqDistance































// false, true ,false 


// evaluating closest school
// set finalSchoolDistance to null
// set stackDistance to 0
// set qDistance to 1
// set blockDistance to 0

// block = blocks[n]
// left_stack = blocks.slice[0,n - 1]
// right_q = blocks.slice[n,blocks.length]
// if block.school is true
        // finalSchoolDistance = schoolDistance
// else  
    //  finalSchoolDistance = Min(evalStack(left_stack),evalq(rightq)), 
    // call evalq on right_stack


// get final school distance

// evalBlock({ school })
    

// evalStack([stack])
    //while stack.length > 0
        
        // current_block = stack.pop
        // // if current_block.school is true
                // return stackDistance
            // else 
                // stackDistance++
    
    //return stackDistance

// evalq([q])
    //while q.length > 0
        
        // current_block = q.shift
        // // if current_block.school is true
                // return stackDistance
            // else 
                // stackDistance++
    
    //return stackDistance
