function onlyPositivNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > 0) {
            positiveNumbers.push(element);
        }
    }
    return positiveNumbers;
}

console.log(onlyPositivNumbers([0, -2, 54, -4, 6, 90]));