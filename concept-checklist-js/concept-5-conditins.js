const number1 = 5;
const number2 = 6;
const number3 = 7;

if (number1>= 5 && 5 <= number2) {
    console.log('yes');
}else{
    console.log('no');
}
if (number1>= 8 || 9 <= number2) {
    console.log('yes');
}else{
    console.log('no');
}
if ((number1>= 8 && 9 <= number2) || 7 <= number3){
    console.log('yes');
}else{
    console.log('no');
}