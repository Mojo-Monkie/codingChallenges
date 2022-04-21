// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



var humanYearsCatYearsDogYears = function(humanYears) {
    return [humanYears, (15 + ((humanYears > 2) ? (9+(humanYears-2)*4) : humanYears == 2 ? 9: 0)), (15 + ((humanYears > 2) ? (9+(humanYears-2)*5) : humanYears == 2 ? 9: 0))]
  }

//   // output should be: 
//   humanYearsCatYearsDogYears(1), [1,15,15])
//   humanYearsCatYearsDogYears(2), [2,24,24])
//   humanYearsCatYearsDogYears(10), [10,56,64])



// **********************************************************************************************************************************************
// Well of Ideas
// ***********************************************

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    // filter number of 'good' in the array
    // determine the length of 'good' to gain total
    switch ( x.filter(item => item == 'good').length) {
    // if total is 0, then return 'Fail!'
      case 0:
        return 'Fail!'
        break;
    // if total is 2 or less, then return 'Publish!'
      case 1:
      case 2:
        return 'Publish!'
        break;
     // if total is over 2, then return 'I smell a series!'
      default:
        return 'I smell a series!'
        break;
        
    }
  }

// well(['bad', 'bad', 'bad']) Output: 'Fail!'
// well(['good', 'bad', 'bad', 'bad', 'bad']) Output: 'Publish!'
// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) Output: 'I smell a series!'






// **********************************************************************************************************************************************
// N-th Power
// ***********************************************

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
    //use method NaN to determine if  index of n is undefined
    // if n is NaN return -1
    // If not/else use method Math.pow to compute the n-th power of array[n]
    return isNaN( Math.pow(array[n], n) )? -1 : Math.pow(array[n], n)
 }

//  index([1, 2, 3, 4],2) Output: 9;
//  index([1, 3, 10, 100],3) Output: 1000000;
//  index([1, 2],3) Output: -1;
//  index([1,1,1,1,1,1,1,1,1,1], 9) Output: 1;
//  index([1,1,1,1,1,1,1,1,1,2], 9) Output: 512;
//  index([29,82,45,10], 3) Output: 1000;
//  index([6,31], 3) Output: -1;
//  index([75,68,35,61,9,36,89,0,30], 10) Output: -1;








 // **********************************************************************************************************************************************
// Grasshopper - If/else syntax debug
// ***********************************************

// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive. Unfortunately, Greg made some errors while creating the function.

// checkAlive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

// Greg's code:
// function checkAlive (health) {
//     if () {
//       health < 0
//       return false
//     } else () {
//       return true
//     }
//   }



function checkAlive (health) {
    // Greg misplaced the parameter and change 0 to 1 because false is <= 0
    if (health < 1) {
      return false
    } else {
      return true
    }
  }

  function checkAlive (health) {
    // can simplify with a bang operator
    return !(health <= 0)


// checkAlive(5) Output: true
// checkAlive(0) Output: false


 // **********************************************************************************************************************************************
// Grasshopper - If/else syntax debug
// ***********************************************

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

function nthEven(n){
    return (n*2) -2
  }