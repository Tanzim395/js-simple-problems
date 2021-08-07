// const flooring = Math.floor(13.67);
// console.log(flooring);

const number = -78;
const answer = Math.abs(number);
console.log(answer);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([32, 45, 67])
console.log('array total is', total);