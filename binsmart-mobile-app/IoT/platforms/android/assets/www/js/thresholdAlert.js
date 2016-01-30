/* This JavaScript code is used to compare the real time
   force data with the corresponding threshold value
   and generate a notification alert
 */

var forceXAlert = 0;
var forceYAlert = 0;
var forceZAlert = 0;

function thresholdAlert(forceX, forceY, forceZ) {

    // Compares with threshold for Force X
    if (forceX > thresholdX) {
        forceXAlert = forceXAlert + 1;
        document.getElementById("xAlert").innerHTML = forceXAlert;

    }

    // Compares with threshold for Force Y
    if (forceY > thresholdY) {
        forceYAlert = forceYAlert + 1;
        document.getElementById("yAlert").innerHTML = forceYAlert;

    }

    // Compares with thresholdfor Force Z
    if (forceZ > thresholdZ) {
        forceZAlert = forceZAlert + 1;
        document.getElementById("zAlert").innerHTML = forceZAlert;

    }


}