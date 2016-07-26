var player; 
var obstacleSprites;
var obstacleSpritesImage;
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 15;
var numGroundSprites;
var tears;
var tearsImage;
var projectile;

function preload(){
    tearsImage = loadImage("Tear.png");
    obstacleSpritesImage = loadImage("Heart.png");
}
function setup() {
    createCanvas(800, 500);
    player = createSprite(100, height-55, 50, 50);
    obstacleSprites = new Group();
    groundSprites = new Group();
    projectile = createSprite(100, height-55, 15, 5);
    
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++){
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }
    
}
function draw() {
    background(0, 0, 100);
    if (random() > 0.98) {
    var obstacle = createSprite(camera.position.x + width, random(0, (height-47)), 30, 30);
    obstacle.addImage(obstacleSpritesImage);
    obstacleSprites.add(obstacle);
    }
    tears = createSprite(player.position.x, player.position.y, 10, 10);
    tears.addImage(tearsImage);
    var firstObstacle = obstacleSprites[0];
    if(obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)){
        removeSprite(firstObstacle);
    }
    
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
        player.position.y = player.position.y - 5;
    }
    if(keyDown(DOWN_ARROW) && player.position.y < height-55){
        player.position.y = player.position.y + 5
    }
    if(keyDown(32)){
        projectile.position.x = player.position.x;
        projectile.position.y = player.position.y;
        
    }
        projectile.position.x = projectile.position.x + 20;
        projectile.position.y = projectile.position.y
    // projectile.position.x = projectile.position.x;
    // projectile.position.y = projectile.position.y;
    // projectile.position.x = projectile.position.x + 5;
    // projectile.position.y = projectile.position.y 
}