// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// P: Is it going to be integers? Are we going to be given any special characters? An empty arr ever?
// R: Return a new arr with each value doubled 
// E: If we are givien [2,3,4], should return [4,6,8]
//   If we are givien [4,5,6], should return [8,10,12]
//   If we are givien [2,22], should return [4,44]
// P:
// Make a function that takes in an array
// map through the array and multiply each element by 2. also return 

function maps(arr){
    if (arr.length === 0 || arr === undefined){
        console.log('array is invalid')
    }else {
    return arr.map(num => num *= 2)
    }
}

console.log(maps([1,2,3]))
console.log(maps([]))