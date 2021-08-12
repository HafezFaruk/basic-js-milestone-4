// const myNumber = 21.2999999;
// const outpot =Math.random()*6;
// const rounded = Math.round(outpot);

// console.log(rounded);

// for (let i = 0; i <= 10; i++) {
//     const outpot =Math.random()*6;
//     const rounded = Math.round(outpot);
//     console.log(rounded);  
// }

/* var first = 5;
var scond = 7;
console.log(first, scond);
var temp = first;
first = scond;
scond = temp;
console.log(first, scond); */
/* 
[first,scond]=[scond,first];
console.log(first, scond); */

/* const business = 450;
const minister = 850;
const army = 250; */

/* if (business > minister) {
    console.log('business person is bigger');
} else {
    console.log('minister person is bigger');
}
 */

/* function findLergest(first, scond) {
    if (first > scond) {
        return first; 
    } else {
        return scond;
    }
}
const largest = findLergest(800, 300);
console.log('largest is', largest); */
/* 
if (business > minister && business > army) {
    console.log('business is bigger');
}else if(minister > business && minister > army) {
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
} */

/* const max = Math.max(business,minister,army);
console.log(max); */

/* function findLergerNumber(first, scond, third) {
    if (first > scond && first > third) {
        return first;
    } else if (scond > first && scond > third) {
        return scond
    }else{
        return third;
    }
}
const lergestNumber = findLergerNumber(822,333,444);
console.log(lergestNumber); */
/* 
function findLergerNumber() {
    if (first > scond && first > third) {
        return first;
    } else if (scond > first && scond > third) {
        return scond
    }else{
        return third;
    }
}
const lergestNumber = findLergerNumber(822,333,444);
console.log(lergestNumber);
 */

/* 
const numbers = [12,32,42,21,45,65];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum); */

/* function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([5,6,7]);
console.log(total);  */

/* function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [34, 53, 56, 76, 75];
const oldest = largestElement(ages);
const oldest2 = ([-22, -11, -6]);
console.log(oldest2); */

/* function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -17]);
console.log('oldest2', oldest2);
 */
// Task: find the lowest or smallest element of an array
/* const number = -78;
const answer = Math.abs(number);
console.log(answer); */

//Which condition will print hello? 
/* var a=2;
var b=3; 
// if(a___?___b)
// {console.log(“Hello”);}
if (a >= b) {
    console.log('hello');
} */
/* const num = 12.96;
const num1 = Math.round(num)
console.log(num1);

 */

/* function largestElement(numbers) {
    let max = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const num1 = [32, 12,52,35,79,88,54];
const largestNumber = largestElement(num1);
console.log(largestNumber); 

function smallestElement(numbers) {
    let min = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
const num = [33, 22,42,65,78,98,54];
const smallNumber = smallestElement(num);
console.log(smallNumber); */



/* const names = ['jamal', 'kamal', 'jamal','hamal','kamal', 'gaji', 'haji','haji'];

function removeDuplicate(names) {
    const unique = [];
    for (const element of names){
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

function largestElement(numbers) {
    let max = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const num1 = [32, 12,52,35,79,88,54];
const largestNumber = largestElement(num1);
console.log(largestNumber); 

function smallestElement(numbers) {
    let min = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
const num = [33, 22,42,65,78,98,54];
const smallNumber = smallestElement(num);
console.log(smallNumber);

function bestFriend(name) {
    // if (name.length > 0) {
    //     return 'error'
    // }
    let friend = '';
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if (element.length == 5) {
            friend = element;
            break   
        }
    }
    return friend;
}
console.log(bestFriend(['Faruk','Karim','rahim']));