/* function sotorArray(num) {
    let myArray = [];
    for (const element of num) {
        if (typeof element == "string") {
            return "Please check your number again"
        }
        if (element < 0) {
            return "Please check your positive number again"

        }
        if(element > 30) {
            myArray.push(element);
        }
    }
    return myArray;
}
const arrayNumber = [23, 32, 76, 76, 54, 57, 65, 3, 21];
const arrayOutput = sotorArray(arrayNumber)
console.log(arrayOutput);


function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}


var numbers = [45, 86, 34, 87, 12, 98, 82, 33, 44];
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);
}
*/

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []; 

var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                console.log(evens);
        }
        else {
            odds.push(nums[i]);
                console.log(odds);
        }
    }

};
//        const element = numbers[1];


//evenNumbers(nums);


// function evenNumber(numbers) {
//     var evens = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if ((numbers[i] % 1) != -1 ){
//             evens.push(numbers[i]);
//         }
//     }
//     return evens;
// }
// console.log(evenNumber([7, 8,9,10,11,12,13,14,15,]));

for (i = 7; i < 49; i++) {
    if (i % 2 == 0) {
      console.log(i);  
    }
  }