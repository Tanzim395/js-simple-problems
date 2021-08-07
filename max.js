const business = 1650;
const minister = 1150;
const army = 900;
/* if (business > minister) {
    console.log('Business er pola bigger');
}
else {
    console.log('Minister er pola bigger');
} */

//compare using function: 
function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest(154, 241);
console.log('largest is', largest);


//compare three
// if (business > minister && business > army) {
//     console.log('Business is Bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('Minister is Bigger');
// }
// else if(army > business && army > minister){
//     console.log('Army is Bigger');
// }
// else {
//     console.log('Army is Bigger');
// } //

// var max = Math.max(business, minister, army);
// console.log('Largest Value is', max);

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three


// Task 2: Write a function to find the smallest of three numbers.