var NUM_CIRCLES = 48;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(1500,700);
    frameRate(200);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/3;
    rVal = 5;
    gVal = 5;
    bVal = 5;
    
}
function draw() {
    
    var isShifted = false;
    
    var y = height;
    while (y >= 0){
    var x;
    if (isShifted) {
        x = circleRadius;
    } else {
        x = 0;
    }
    while (x<= width){
        fill(color(rVal, gVal, bVal));
        stroke(color(rVal, gVal, bVal));
        ellipse(x, y, circleDiameter, circleDiameter);
        x = x + circleDiameter;
    }
    y = y - circleRadius;
    isShifted = !isShifted;
    rVal = (rVal + 200) % 256;
    gVal = (gVal + 200) % 256;
    bVal = (bVal + 200) % 256;

    
    }
}

// function keyPressed() {
//     if (keyCode === 115 || keycode === 83) {
//         saveCanvas('geometricPattern','png');
//     }
//     return false;
// }

function keyPressed() {
    if (keyCode === 32){
        rVal = random (100);
        gVal = random (100);
        bVal = random (100);
        
    }
}