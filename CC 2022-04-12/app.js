// Convert number to reversed array of digits
// Given a random non-negative number, 
//you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// P: Are you ever given an empty array? What then? Are you alway given digits?
// R: What ever number was given, it is now split into an array and the order of the number is reversed
// E: if we were given 9238 => [8,3,2,9]
//                      330 => [0,3,3]
//                      undefined => not a number
// P: Make a function that takes in a number
function digitize(num) {
    const numToSeparate = num
    // Turn numbers into string
    //Separate numbers into an array
    const arrayOfDigits = Array.from(String(numToSeparate), Number)
    // Reverse order of array
    return arrayOfDigits.reverse

}

reverseArray(9238) // should return [8,3,2,9]