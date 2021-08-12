/* 
firstBook = 100 page
secondBook = 200 page
thirdBook = 300 page
*/

function bookCalculator(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;
    // wood calculation
    const firstBook = firstBookQuantity * firstBookPage;
    const secondBook = secondBookQuantity * secondBookPage;
    const thirdBook = thirdBookQuantity * thirdBookPage;
    // adding all wood quantity
    const totalBook = firstBook + secondBook + thirdBook;
    return totalBook;
}

const bookCalculation = bookCalculator(1, 2, 3);
console.log(bookCalculation);