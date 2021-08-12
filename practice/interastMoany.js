/* let fact = 1;

for (let i = 6; i >= 1; i--) {
    fact = fact * i;
}
console.log(fact); */

// let fact =1;
// for (let i = 6; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log(fact);


//[0, 1, 1, 2, 3, 5, 8, 13, 21]
/* const fibo = [0, 1];
for (let i = 2; i <= 6; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

/* const fibonacci = [0 ,1];
for (let i = 2; i <= 6 ; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
console.log(fibonacci); */
/*  function fibo(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    return fibo(i - 1) + fibo(i - 2);
}
console.log(fibo(8)); */ 
/* 
function fibonacci(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    return fibonacci(i - 1) + fibonacci(i - 2);
}
console.log(fibonacci(8)); */

const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 32000 },
    { name: 'apple smart watch', price: 18000 },
    { name: 'bosundhara binding paper', price: 80 },
    { name: 'lg smart phone', price: 10000 },
    { name: 'old granny land phone', price: 100 },
    { name: 'samsung watch', price: 1000 },
    { name: 'Dell laptop', price: 31000 },
    { name: 'lenovo laptop', price: 41000 },
]

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}

const matched = searchProducts(products, 'laptop');
console.log(matched);

/* function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products {
        
    }
} */