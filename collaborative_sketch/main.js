// <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
// <script>
//   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD__e0IBUxNHnZI6KpHV9V3uk1U7IXW29Q",
    authDomain: "collaborative-sketch-b55d4.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-b55d4.firebaseio.com",
    storageBucket: "collaborative-sketch-b55d4.appspot.com",
  };
  firebase.initializeApp(config);
// </script>
var pointsData = firebase.database().ref();

var points = [];

function setup() {
    var canvas = createCanvas(800, 800);
    background(0);
    fill(255);
    pointsData.on("child_added", function (point) {
        points.push(point.val());
    })
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(function () {
        if(mouseIsPressed) {
            drawPoint();
        }
        })
}
function draw() {
    for(var i = 0; i < points.length; i++){
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
}
function drawPoint() {
    pointsData.push({x: mouseX, y: mouseY});
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    console.log("Hello");
    pointsData.remove();
    // points = [];
    pointsData.on("child_removed", function () {
        points = [];
     });

}
