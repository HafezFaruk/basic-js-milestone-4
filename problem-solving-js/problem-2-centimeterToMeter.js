function feetToInches(centimeter) {
    var meter  = centimeter  * 0.01;
    return meter;
}
var myCentimeter = 3;
var myMeter = feetToInches(myCentimeter);
console.log('Feet To Inches',myMeter+'m');