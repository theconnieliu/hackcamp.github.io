var player;

var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;


function setup() {
    // background(0,0,10);
    createCanvas(700, 300);
    player = createSprite(width/2, height-55, 20,20);
    
    wall1 = createSprite(width/2, height - 30, 650, 10);
    wall2 = createSprite(width/2, 30, 650, 10);
    wall3 = createSprite(30,75, 10, 100);
    wall4 = createSprite(30, 225, 10, 100);
    wall5 = createSprite(width-30, 75, 10, 100);
    wall6 = createSprite(width-30, 225, 10, 100);
    wall7 = createSprite(75, height/2, 10, 150);
    wall8 = createSprite(125, height/2, 90, 10);
    wall9 = createSprite(175, height/2, 10, 150);
    wall10 = createSprite(225, 185, 10, 80);
    wall11 = createSprite(325, 185, 10, 80);
    wall12 = createSprite(275, height/2, 90, 10);
    wall13 = createSprite(245, 110, 10, 75);
    wall14 = createSprite(300, 110, 10, 75);
    wall15 = createSprite(273, 77, 65, 10);
    wall16 = createSprite(375, height/2, 10, 150);
    wall17 = createSprite(420, 77, 100, 10);
    wall18 = createSprite(420, 223, 100, 10);
    wall19 = createSprite(520, height/2, 10, 150);
    wall20 = createSprite(550, height/2, 50, 10);
    // wall21 = createSprite(570, 175, 10, 50);
    // wall22 = createSprite(570, 120, 10, 50);
}
function draw() {
    background(0);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-5)){
        player.position.x = player.position.x + 1;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 5){
        player.position.x = player.position.x - 1;
    }
    if (keyDown(38) && player.position.y > 5){
        player.position.y = player.position.y - 1;
    }
    if (keyDown(40) && player.position.y < height-5){
        player.position.y = player.position.y + 1;
    }
    drawSprites();
}