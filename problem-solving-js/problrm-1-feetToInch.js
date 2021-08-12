//inches  To Feet
function inchesToFeet(inches) {
    var feet  =  inches / 12;
    return feet;
}
var myInches = 144;
var myFeet = inchesToFeet(myInches);
console.log('Feet To Inches',myFeet+'F');

//Feet To Inches
function feetToInches(feet) {
    var inches  =  feet * 12;
    return inches;
}
var myFeet = 1;
var myInches = feetToInches(myFeet);
console.log('Feet To Inches',myInches+'-Inc');