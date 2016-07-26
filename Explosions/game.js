var player; 
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 15;
var numGroundSprites;

function setup() {
    createCanvas(800, 500);
    player = createSprite(100, height-55, 50, 50);
    groundSprites = new Group();
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++){
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }
}
function draw() {
    background(0, 0, 100);
    drawSprites();
    player.position.x = player.position.x + 5;
    camera.position.x = player.position.x + (width/4);
    var firstGroundSprite = groundSprites[0];
    if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)){
        groundSprites.remove(firstGroundSprite);
        firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
        groundSprites.add(firstGroundSprite);
    }
    //if(keyDown(RIGHT_ARROW) && player.position.x < width-25) {
     //   player.position.x = player.position.x + 3;
    //}
    //if(keyDown(LEFT_ARROW) && player.position.x > 25) {
      //  player.position.x = player.position.x - 3;
    //}
    if(keyDown(UP_ARROW) && player.position.y > 25){
        player.position.y = player.position.y - 3;
    }
    if(keyDown(DOWN_ARROW) && player.position.y < height-55){
        player.position.y = player.position.y + 3
    }
}