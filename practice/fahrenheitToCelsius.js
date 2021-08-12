function fahrenheitToCelsius(e) {
    let cels = e * 33.8;
    return cels;
}

let celsius = fahrenheitToCelsius(140);
console.log('fahrenheit to Celsius', celsius);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  } 
  let resuld = toCelsius(143);
  console.log('fahrenheit to Celsius', resuld);