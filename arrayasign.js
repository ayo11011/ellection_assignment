// 1. Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Sample Cases
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500



function getFirstValue(arr){
    return arr[0];
    
    }
    console.log (getFirstValue([1, 2, 3]))
    console.log (getFirstValue([80, 5, 100]))
     console.log (getFirstValue([-500, 0, 50]))


// 2. Pair Management
// Given two arguments, return an array which contains these two arguments.

// Sample Cases
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]


function makePair(num1, num2){
    
    return [num1, num2]
    }
    
    console.log(makePair(1, 2))
    console.log(makePair(51, 21))
    console.log(makePair(512124, 215))
    
    
    
//   3. Reverse an Array
// Write a function to reverse an array.

// Sample Case
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ [] 
    
    
    function reverse(arr){
        let reversedArr = []
        
        // for(let i = arr.length - 1; i >= 0; i--){
        //     reversedArr.push(arr[i])
        // }
        // return reversedArr
    }
        function reverse(arr) {
        arr.reverse();
          return arr;

        }
    console.log(reverse([1, 2, 3, 4]))
    console.log(reverse([9, 9, 2, 3, 4]))
    console.log(reverse([]))
    
//  4. Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Sample Case
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


function arrayToString(arr){
    return arr.join("")
    
    }
    console.log(arrayToString([1, 2, 3, 4, 5, 6]))
    console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
    console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))
    
    
    
//     5. Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Sample Cases
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4


    function valueAt(arr, index) {
  index = Math.round(index); // round the index to the nearest integer
  return arr[index]; // return the item in the array with the rounded index
}


console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)); 
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));

// 6. Find the Index 
// Create a function that finds the index of a given item.

// Sample cases
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1


function search(arr, item) {
  return arr.indexOf(item);
}

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));
    
//     7. Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Sample cases
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false
    
    function check(arr, num){
        return arr.includes(num);
        }

console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))

// 8. Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Sample case
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
// invertArray([]) ➞ []

function invertArray(arr){
    return arr.map(num => -num)
    
    }
    
    console.log(invertArray([1, 2, 3, 4, 5]))
    console.log(invertArray([1, -2, 3, -4, 5]))
    console.log(invertArray([]))
    
//   9. Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta

// Sample case
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]
// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"] 
    
    function skipTooMuchSugarDrinks(drinks){
        return drinks.filter(drink => drink !== "cola" && drink !== "fanta")
        }
        
        console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]))
        console.log(skipTooMuchSugarDrinks(["fanta", "cola"]))
        console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]))
    
  
//     10. Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array 
// so that it returns an array of integers only.

// Sample cases
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr){
    return arr.filter (element => typeof element === "number")
    }
    
    console.log(filterArray([1, 2, 3, "a", "b", 4]))
    console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]))
    console.log(filterArray(["Nothing", "here"]))

// 11. The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Sample cases
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// forbiddenLetter("m", []) ➞ true


function forbiddenLetter(letter , words){
    return words.every(word => !word.includes(letter))
    }
    
    console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]))
    console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]))
    console.log(forbiddenLetter("m", []))
    
//     12. Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain 

//only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Sample cases
// cleanUpArray(["8"]) ➞ [[8], []]
// cleanUpArray(["11"]) ➞ [[], [11]]
// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]